const s2m = require('..');
const moment = require('moment');

const convert = async () => {
  const partials = await s2m.jsonImport(__dirname + '/assets/json/frogs_1.json');
  const melodies = await s2m.partials2melodies(partials);
  const smfs = await s2m.genSMFs(melodies, 'frogs_1');
  await s2m.smfsBatchExport(smfs, 'frogs_1', __dirname + '/output', {
    makeOutputFolder: true,
    outputFolderName: moment(new Date()).format('YYMMDD')
  });
  console.log('Completed!');
};

convert();
