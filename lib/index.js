const utils = require('./utils');
const { txtImport, jsonImport, smfImport } = require('./import');
const partials2melodies = require('./partials2melodies');
const genSMFs = require('./genSMFs');
const { smfExport, smfsBatchExport } = require('./export');
const { convertFromSpear } = require('./convert');
const { smfPlay, smfsMultiPlay, outputPorts, refreshPorts } = require('./play');
const reducePartials = require('./reducePartials');

module.exports = {
  utils,
  txtImport,
  jsonImport,
  smfImport,
  partials2melodies,
  genSMFs,
  smfExport,
  smfsBatchExport,
  convertFromSpear,
  smfPlay,
  smfsMultiPlay,
  outputPorts,
  refreshPorts,
  reducePartials
};
