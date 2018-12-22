const s2m = require('..');
const moment = require('moment');

async function convert(){
    const partials = await s2m.txtImport(__dirname + '/assets/txt/large_bowl.txt');
    const melodies = await s2m.partials2melodies(partials);
    const smfs = await s2m.genSMFs(melodies, 'test-song');
    await s2m.smfsBatchExport(
        smfs, 
        'large_bowl', 
        __dirname + '/output', 
        {
            makeOutputFolder: true,
            outputFolderName: moment(new Date()).format('YYMMDD')
        }
    );
    console.log('Completed!');
};

convert();