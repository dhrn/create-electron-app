// For creating windows installer

var electronInstaller = require('electron-winstaller');

const resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './release-builds/create-electron-app-win32-ia32',
    outputDirectory: '.',
    authors: 'Create electron app',
    exe: 'create-electron-app.exe',
    description: 'Electron Application',
    setupExe: 'create-electron-app.exe',
    noMsi: true,
});

resultPromise.then(() => console.log('It worked!'), (e) => console.log(`No dice: ${e.message}`));

