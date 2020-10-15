let vignettes = document.querySelectorAll('.filer_vignette')
let sections = document.querySelectorAll('section')
let youChose = document.querySelector('#youChose')
let fileSelector = document.querySelector('#fileSelector')
let fileName = document.querySelector('#fileName')
let applyEffectBtn = document.querySelector('#applyEffect')
let uploading_fields = document.querySelector('.uploading_fields')
let uploading_uploaded = document.querySelector('.uploaded')
let uploading_loading = document.querySelector('.uploading .embed_loading')
let uploading_cancel = document.querySelectorAll('.uploading .cancel')
let yt_input = document.querySelector('#youtubeLink')
let yt_load_btn = document.querySelector('.ytLinkContainer > button')
let yt_loaded = document.querySelector('.yt_loaded')
let yt_error = document.querySelector('.yt_error')
let embed_loading = document.querySelector('.embed_loading')
let amount_nb = document.querySelector('#amount_nb')
let amount_slider = document.querySelector('#amount_slider')
let regenerate = document.querySelector('#regenerate')


let parseHash = () => {
    const hashes = window.location.hash.substr(1).split('&')
    if(hashes[0] == "" || hashes[0] == "explanation") return {section: 'home'}
    const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })
    return params
}

window.addEventListener('hashchange', function (evt) {
    sections.forEach(section => {
        section.classList.add('hidden')
    })
    let parsedHash = parseHash()
    youChose.innerHTML = parsedHash.filter + ' effect'
    applyEffectBtn.dataset.filter = parsedHash.filter
    document.querySelector(`.${parsedHash.section}`).classList.remove('hidden')
});

vignettes.forEach(vignette => { 
    vignette.addEventListener('click', evt => {
        let filter = evt.currentTarget.dataset.filter
        window.location.hash = `section=uploading&filter=${filter}`
    })
})

fileSelector.addEventListener('change', function() {
    let fullPath = fileSelector.value;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        let filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        fileName.innerHTML = filename
        applyEffectBtn.dataset.ytid = ""
        applyEffectBtn.disabled = false
        uploading_fields.classList.add('hidden')
        uploading_uploaded.classList.remove('hidden')
    }
})

uploading_cancel.forEach(btn => {
    btn.addEventListener('click', function() {
        applyEffectBtn.disabled = true
        uploading_fields.classList.remove('hidden')
        uploading_uploaded.classList.add('hidden')
        yt_loaded.classList.add('hidden')
    })
})

yt_input.addEventListener('input', () => {
    yt_load_btn.classList.remove('hidden')
})

yt_load_btn.addEventListener('click', () => {
    if (!window.navigator.onLine) {
        yt_error.innerHTML = '⚠️ You must have a working connection to upload a song from YouTube'
        yt_error.classList.remove('hidden')
        return false;
    }

    yt_loaded.classList.add('hidden')
    uploading_fields.classList.add('hidden')
    embed_loading.classList.remove('hidden')
    let link = yt_input.value
    
    let xhr = new XMLHttpRequest();
    if (!xhr) {
        console.error("Cannot create XMLHttpRequest")
        return false
    }

    throwError = () => {
        yt_error.innerHTML = 'Error: the video coudn\'t be loaded. Please try with another url, or upload the file directly.'
        yt_error.classList.remove('hidden')
        uploading_fields.classList.remove('hidden')
        embed_loading.classList.add('hidden')
        applyEffectBtn.disabled = true
    }
    xhr.onerror = function() { 
            throwError()
        };
    xhr.onload = function() {
        if (xhr.status === 200) {
            var metadata = xhr.response;
            embed_loading.classList.add('hidden')
            yt_loaded.querySelector('img').src = metadata.thumbnail
            yt_loaded.querySelector('.title').innerHTML = metadata.title
            yt_loaded.querySelector('.duration').innerHTML = 'duration: ' + ((metadata.length >= 3600) ? "way too long" : new Date(metadata.length * 1000).toISOString().substr(14, 5));
            yt_loaded.classList.remove('hidden')
            applyEffectBtn.dataset.ytid = metadata.id
            applyEffectBtn.disabled = false
        } else {
            throwError()
        }
    };
    
    xhr.open("GET", `https://ytdl.mooderize.com/metadata/${encodeURIComponent(link)}`);
    xhr.responseType = "json"
    xhr.send();

})

amount_slider.oninput = function() {
    amount_nb.value = this.value
    regenerate.disabled = false
}

let hashOnLoad = parseHash()
if(hashOnLoad.section == "voila") window.location.hash = 'section=home'

window.dispatchEvent(new HashChangeEvent("hashchange"))
yt_input.value = ""