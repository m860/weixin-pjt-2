/**
 * Created by jean.h.ma on 12/5/16.
 */
var watch = require("node-watch");
var path = require("path");
var sass = require("node-sass");
var fs = require("fs");

var watchFolder = path.normalize(path.join(__dirname, '../sass/'));

var dist = path.normalize(path.join(__dirname, '../dist/'));

var filter = function (pattern, fn) {
	return function (filename) {
		if (pattern.test(filename)) {
			fn(filename);
		}
	}
}

console.log('watching ' + watchFolder);
watch(watchFolder, filter(/\.sass$/i, function (filename) {

	newFilename = path.join(dist, path.basename(filename).replace('sass', 'css'));

	sass.render({
		file: filename,
		outFile: newFilename
		//,outputStyle: 'compressed'
	}, function (err, result) {
		if (!err) {
			fs.writeFile(newFilename, result.css, function (err2) {
				if (!err2) {
					console.log(filename + 'is builded');
				}
			});
		}
		else {
			console.error(err);
		}
	});

}));