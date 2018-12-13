Fluidsynth starts on start up

default background start: fluidsynth -is -a alsa
to bring up a shell: fluidsynth -s -a alsa 
once a shell is brought up:
  can determine loaded fonts with: fonts
  if none listed, load from /usr/share/soundfonts: load /usr/share/soundfonts/FluidR3_GM.sf2
  list available instruments from loaded soundfont: inst 1
  list the channels and assoc instruments for our midi: channels
  set an instrument for a channel. EG, set synth drums for channel 0: prog 0 118

  
setting up node
Need libasound2-dev library
