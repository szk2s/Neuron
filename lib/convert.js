//Deprecated (under Development)
async function convertFromSpear(songName){
    const inputFilepath = path.join(this.config.directories.assets,'/txt',  songName+'.txt');
    const partials = await this.txtImport(inputFilepath);
    const melodies = await this.partials2melodies(partials);
    const smfs = await this.genSMFs(melodies, songName);
    this.smfsBatchExport(smfs, songName);
}

//Deprecated (under Development)
async function convertFromMatlab(songName){
    const partials = await this.csvImport(songName);
    const melodies = await this.partials2melodies(partials);
    const smfs = await this.genSMFs(melodies, songName);
    this.smfsBatchExport(smfs, songName);
}