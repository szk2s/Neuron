const s2m = require('..');
const moment = require('moment');
const _ = require('lodash');
const { FREQ_LIMIT } = s2m;

const compress = async () => {
  const partials = await s2m.txtImport(__dirname + '/assets/txt/hokekyo.txt');
  // filter some partials which is out of frequency range.
  const filteredPartials = partials.filter((partial) => {
    const meanFreq = _.mean(partial.freqs);
    return FREQ_LIMIT.LOW < meanFreq && meanFreq < FREQ_LIMIT.HIGH;
  });
  await s2m.fillBlankTime(filteredPartials);
  // compress 135 partials into 15 partials.
  const melodies = await s2m.partials2melodies(filteredPartials);
  const smfs = await s2m.genSMFs(melodies, 'hokekyo', {
    pitchBendRange: 127
  });
  await s2m.smfsBatchExport(smfs, 'hokekyo', __dirname + '/output', {
    makeOutputFolder: true,
    outputFolderName: moment(new Date()).format('YYMMDD')
  });
  console.log('Completed!');
};

compress();
