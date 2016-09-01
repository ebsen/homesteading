// Compile our CSS.
const fs = require('fs')
const sass = require('node-sass')
sass.render({
	file: 'style/main.scss'
	// outFile: 'static/css/experiment.css'
}, function(error, result) {
	fs.writeFile('static', 'result.css')
})
