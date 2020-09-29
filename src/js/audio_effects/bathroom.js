module.exports = async function bathroom(buffer, amount) {
    console.log("bathroom()")
    let ctx = new OfflineAudioContext(buffer.numberOfChannels, buffer.length, buffer.sampleRate);
    let source = ctx.createBufferSource();
    source.buffer = buffer;

    // LOWPASS
    const lowpass = ctx.createBiquadFilter()
    lowpass.type = 'lowpass'
    lowpass.frequency.setValueAtTime(500-(amount*35), 0) // ~300 by default
    source.connect(lowpass)
    //lowpass.connect(ctx.destination)

    // LOWSHELF (Bass boost)
    const lowshelf = ctx.createBiquadFilter()
    lowshelf.type = 'lowshelf'
    lowshelf.frequency.setValueAtTime(400-(amount*30), 0) // ~200 by default
    lowshelf.gain.setValueAtTime(2+(Math.floor(amount/4)), 0)
    lowpass.connect(lowshelf)
    //lowshelf.connect(ctx.destination)

    // SOURCE
    /* let dryGain = ctx.createGain();
    source.connect(dryGain)
    dryGain.connect(ctx.destination); */

    // REVERB
    let convolver = ctx.createConvolver();
    convolver.buffer = await ctx.decodeAudioData(await (await fetch("../convolvers/convolver_church.wav")).arrayBuffer());
    lowshelf.connect(convolver)
    convolver.connect(ctx.destination)
    //let wetGain = ctx.createGain();
    //source.connect(convolver)
    //convolver.connect(ctx.destination);

    // MIX:
    /* let percentReverb = 0
    dryGain.gain.value = 1 - percentReverb;
      wetGain.gain.value = 0; */

    source.start(); //Allow the audio to be played in the browser
    let outputAudioBuffer = await ctx.startRendering();
    return (outputAudioBuffer);
}

//module.exports = bathroom