const fs = require('fs');
const bookmarkleter = require('bookmarkleter');

fs.readdir('./google', (err, files) => {
    if (err) console.error(err);
    files.forEach((file) => {
        fs.readFile(`./google/${file}`, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const bookmarklet = bookmarkleter(data, {
                urlencode: true,
                iife: true,
                mangleVars: true
            });
            console.log(`${file}:\n${bookmarklet}`);
        });
    });
});