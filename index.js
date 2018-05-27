var fs = require('fs');

fs.readdir('./files', 'utf-8', function(err, files) {
	if (err) throw err;
	console.log(files);
	fs.writeFile('./text.txt', files, function(err) {
        if (err) throw err;
    });
});