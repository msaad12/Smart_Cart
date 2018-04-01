const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;


function createWindow(){

	 win = new BrowserWindow({width:800, heigth:600, icon:__dirname+'/img/cart icon.jpg'});

   win.loadURL(url.format({
     pathname: path.join(__dirname, 'login.html'),
     protocol: 'file',
     slashes: true
   }));

   win.webContents.openDevTools();

   win.on('closed', () => {
     win = null;
   });
}

app.on('ready', createWindow);

app.on('window-all-close', ()=> {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
