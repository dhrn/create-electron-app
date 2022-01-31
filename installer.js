// For creating windows installer

var electronInstaller = require('electron-winstaller');

const resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './release-builds/create-electron-app-win32-ia32',
    outputDirectory: '.',
    authors: 'Create react app',
    exe: 'create-electron-app.exe',
    description: 'Vyapar Business Accounting App',
    setupExe: 'create-electron-app.exe',
    noMsi: true,
});

resultPromise.then(() => console.log('It worked!'), (e) => console.log(`No dice: ${e.message}`));

