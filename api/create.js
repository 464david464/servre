const fs = require('fs');
const path = require('path');
const read = require('./read');
const dataPath = path.join(__dirname + '/../data/students.json');

function create(student) {
    const currentStudent = read();
    console.log(currentStudent);
    const studentName = student.name

    if(studentName in currentStudent) {
        return {student: false, msg: studentName + ' already exists'}
    }

    currentStudent[studentName] = student;
    delete currentStudent.status;
    delete currentStudent.msg;
    fs.writeFileSync(dataPath, JSON.stringify(currentStudent))
}

module.exports = create