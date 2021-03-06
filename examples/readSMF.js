const s2m = require('..');

const readAndPlaySMF = async () => {
  const smfs = await s2m.smfImport(__dirname + '/assets/mid/cricket.mid');
  const ports = await s2m.outputPorts();
  console.log('Available ports are');
  ports.forEach((port, idx) => {
    console.log(idx + ': ' + port.name);
  });
  const numTracks = smfs.reduce((acc, smf) => acc + smf.length, 0);
  const playoutPortIndices = new Array(numTracks).fill().map((_, i) => i + 1);
  await s2m.smfsMultiPlay(smfs, playoutPortIndices);
};

readAndPlaySMF();
