const installer = require('electron-installer-windows');
const path = require('path');

async function createInstaller() {
    try {
        await installer({
            src: path.join(__dirname, 'dist/todo-list-app-win32-ia32/'),
            dest: path.join(__dirname, 'installer/'),
            authors: ['Mohammed Afthab'],
            exe: 'todo-list-app.exe',
            description: 'A simple to-do list desktop application built with Electron',
            setupExe: 'TodoListAppInstaller.exe'
        });
        console.log('Installer created successfully!');
    } catch (err) {
        console.error(err.message || err);
    }
}

createInstaller();
            