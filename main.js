const { app, BrowserWindow } = require('electron');
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
})