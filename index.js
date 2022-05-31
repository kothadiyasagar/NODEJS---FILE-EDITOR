const fs = require('fs');

//delete file

try {
    fs.unlinkSync('./delete test.txt');
    console.log('successfully deleted delete test.txt');
} catch (error) {
// handle the error
    console.log(error)
}
// read file
const textRead= fs.readFileSync('./read test.txt','utf-8')
 console.log(textRead)

 var data = "\n append i am kothdiya sagar  and fw16 student.";

// append data to file
fs.appendFile('append CONTENT test.txt',data, 'utf8',
	function(err) {		
		if (err) throw err;
	
		console.log("data is appended to file successfully.")
});
// create file
let create="create file"
fs.writeFileSync('create test.txt', create,'utf8')

//reaneme file
fs.renameSync('rename test.txt', 'new.txt');
console.log('File Renamed.');