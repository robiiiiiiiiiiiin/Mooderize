const bathroom = require('./audio_effects/bathroom')
const emptymall = require('./audio_effects/emptymall')
let effects = {bathroom, emptymall}

let fileSelector = document.querySelector('#fileSelector')
let applyEffectBtn = document.querySelector('#applyEffect')
let section_uploading = document.querySelector('.uploading')
let section_loading = document.querySelector('.loading')
let section_voila = document.querySelector('.voila')
let progress_bar = document.querySelector('.progress_bar')
let downloadLink = document.querySelector('#downloadLink')
let preview = document.querySelector('#preview')
let loading_state = document.querySelector('.loading_state')
let test_btn = document.querySelector('#ytTest')
let yt_input = document.querySelector('#youtubeLink')
let regenerate = document.querySelector('#regenerate')
let amount_slider = document.querySelector('#amount_slider')

const audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(2, 44100 * 40, 44100); // définition du contexte audio
let arrayBuffer
let original_buffer
let modified_buffer
let filter
let amount = amount_slider.value


function ytdl(id) {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        if (!xhr) {
            console.error("Cannot create XMLHttpRequest")
            return false
        }
        
        xhr.onerror = function() { 
            reject("Cannot download YouTube video")
        };
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject("Cannot download YouTube video")
            }
        };
        
        xhr.open("GET", `http://ytdl.mooderize.com/audio/${id}`);
        xhr.responseType = "blob"
        xhr.send();
    })
}


applyEffectBtn.addEventListener('click', async function (evt) {
    filter = applyEffectBtn.dataset.filter //choosen filter
    yt_id = applyEffectBtn.dataset.ytid //youtube video id, if empty -> file has been uploaded
    if(!Object.keys(effects).includes(filter)) {                    //check that funny guy didn't change get parameters
        alert(`ERREUR: L'effet choisi (${filter}) n'existe pas.`)   // 
        window.location.hash = ""                                   //
        return                                                      //
    }
    section_uploading.classList.add('hidden')   // UI
    section_loading.classList.remove('hidden')  //
    applyEffectBtn.disabled = true              //

    let file
    if(yt_id != "") {   // DL song if from youtube
        update_progress('10', 'Downloading YouTube video...') //UI
        file = await ytdl(yt_id)
    } else {            // Get song if from disk
        file = fileSelector.files[0];
    }

    update_progress('30', 'Loading audio file...') //UI
    original_buffer = await loadAudio(file)  //create buffer of the original song
    generateSong()  //generate song
})

async function generateSong() {
    try {
        update_progress('55', 'Applying audio effects...')
        modified_buffer = await effects[filter](original_buffer, amount) // create new buffer with effects
        update_progress('90', 'Converting to wav...')
        let blob = await bufferToWav(modified_buffer)
        let url = (window.URL || window.webkitURL).createObjectURL(blob)
        console.log(url)
        downloadLink.setAttribute('href', url)      // UI
        preview.setAttribute('src', url)            //
        regenerate.disabled = true                 //
        window.location.hash = 'section=voila'      //
    } catch (e) {
        update_progress('0', 'An error occured')
    }

}

//Create the audio buffer from the audio file
function loadAudio(audioFile) {
    console.log('Create buffer from file...')
    return new Promise(function(resolve, reject){
        let reader = new FileReader();

        reader.onloadend = function () {
            arrayBuffer = this.result;
            audioCtx.decodeAudioData(arrayBuffer, function (localBuffer) {
                resolve(localBuffer)
            })
        }
        reader.onerror = function (e) {
            alert("Sorry! There was an error reading that file");
            console.log(JSON.stringify(e))
            reject(JSON.stringify(e))
        }
        reader.readAsArrayBuffer(audioFile);
    })
}

function bufferToWav(buffer) {
    console.log("bufferToWav()")

    return new Promise(function (resolve, reject) {
        var worker = new Worker('/js/recorder.worker.js')

        // initialize the new worker
        worker.postMessage({
            command: 'init',
            config: { sampleRate: 44100, numChannels: 1 }
        });

        // callback for `exportWAV`
        worker.onmessage = function (e) {
            var blob = e.data;
            // this is would be your WAV blob
            resolve(blob)
        };

        // send the channel data from our buffer to the worker
        worker.postMessage({
            command: 'record',
            buffer: [
                buffer.getChannelData(0),
                buffer.getChannelData(1)
            ]
        });

        // ask the worker for a WAV
        worker.postMessage({
            command: 'exportWAV',
            type: 'audio/wav'
        });
    })
}

update_progress = (percentage, label) => {
    progress_bar.value = percentage
    loading_state.innerHTML = label
    progress_bar.querySelector('.progress_bar_ie > span').style.width = percentage+'%'
}

regenerate.addEventListener('click', async () => {
    section_voila.classList.add('hidden')       // UI
    section_loading.classList.remove('hidden')  //
    amount = amount_slider.value
    await generateSong(amount)
    window.dispatchEvent(new HashChangeEvent("hashchange"))
})
