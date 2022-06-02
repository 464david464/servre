const fs = require('fs');
const path = require('path');
const read = require('./read');
const dataPath = path.join(__dirname + '/../data/students.json');

function update(student) {
    const currentStudent = read();

    const studentName = student.name;

    if(studentName in currentStudent === false) {
        console.log(studentName + " didn't exists");
        return {sttus: false, msg:'user was not found'};
    }
    console.log(studentName in currentStudent);
    currentStudent[studentName] = student;
    fs.writeFileSync(dataPath, JSON.stringify(currentStudent));
}

module.exports = update;