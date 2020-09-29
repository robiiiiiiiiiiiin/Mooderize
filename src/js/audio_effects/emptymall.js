module.exports = async function emptymall(buffer, amount) {
    console.log("emptymall()")
    let ctx = new OfflineAudioContext(buffer.numberOfChannels, buffer.length, buffer.sampleRate);
    let source = ctx.createBufferSource();
    source.buffer = buffer;

    // HIGHPASS
    const highpass = ctx.createBiquadFilter()
    highpass.type = 'highpass'
    highpass.frequency.setValueAtTime(300+(amount*35), 0) // ~300 by default
    source.connect(highpass)

    // SOURCE
    /* let dryGain = ctx.createGain();
    source.connect(dryGain)
    dryGain.connect(ctx.destination); */

    // REVERB
    let convolver = ctx.createConvolver();
    convolver.buffer = await ctx.decodeAudioData(await (await fetch("../convolvers/convolver_church.wav")).arrayBuffer());
    highpass.connect(convolver)
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