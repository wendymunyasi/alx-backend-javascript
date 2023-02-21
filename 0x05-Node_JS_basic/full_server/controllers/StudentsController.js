import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(req.app.locals.dbFilePath);
      const fieldsSorted = Object.keys(fields).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );
      const lines = [
        'This is the list of our students',
        ...fieldsSorted.map((field) => {
          const students = fields[field].sort();
          return `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}`;
        }),
      ];
      res.status(200).send(lines.join('\n'));
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const fields = await readDatabase(req.app.locals.dbFilePath);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
