const fs = require('fs');
const path = require('path');
const read = require('./read');
const dataPath = path.join(__dirname + '/../data/students.json');

function del(student) {
    const currentStudent = read();

    const studentName = student.name;

    if(studentName in currentStudent === false) {
        return {status: false, msg: studentName + " didn't exists"};
    }
    delete currentStudent[studentName];
    fs.writeFileSync(dataPath, JSON.stringify(currentStudent));
}

module.exports = del;