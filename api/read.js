const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname + '/../data/students.json');

function read() {
    const students = JSON.parse(fs.readFileSync(dataPath , 'utf-8'));
    const arr = Object.keys(students)
    if(arr.length === 0) {
        return {status: false, msg:'the list is empty'};
    } else {
        return students;
    }
}

module.exports = read;