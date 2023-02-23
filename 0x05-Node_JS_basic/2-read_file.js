/* eslint-disable no-param-reassign */
const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @throws {Error} If the database cannot be loaded.
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  const dbFieldNames = fileLines.shift().split(',');
  const studentPropNames = dbFieldNames.slice(0, -1);

  const studentGroups = fileLines.reduce((groups, line) => {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, -1);
    const field = studentRecord[studentRecord.length - 1];
    groups[field] = groups[field] || [];
    // eslint-disable-next-line max-len
    groups[field].push(Object.fromEntries(studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]])));
    return groups;
  }, {});

  const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
