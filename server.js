const easymidi = require("easymidi");
const { spawn } = require('child_process');

if (easymidi === undefined) {
  throw new Error("Easymidi module failed to load. Exiting");
}

const outputNames = easymidi.getOutputs();
const fluidSynthRegex = /^((fluid)\W?(synth))/i;
const fluidSynthName = outputNames.find(name => name.match(fluidSynthRegex));
// const fluidsynth = new easymidi.Output(fluidSynthName);

const inputNames = easymidi.getInputs();

const aconnect = spawn('aconnect', ['-io']);
aconnect.stdout.on('data', data => console.log(data.toString()));


const fluidsynth = spawn('fluidsynth', ['-s', '-a', 'alsa']);
fluidsynth.stdin.write("load /usr/share/sounds/sf2/FluidR3_GM.sf2\n");

fluidsynth.stdout.on('data', data => {
  console.log(data.toString());
  console.log("new line");
});

