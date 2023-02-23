import fs from 'fs';

// eslint-disable-next-line import/prefer-default-export
export const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const lines = data.trim().split('\n');
      const fields = {};
      lines.forEach((line, index) => {
        if (index === 0) {
          // Skip the header line
          return;
        }
        // eslint-disable-next-line no-unused-vars
        const [firstName, lastName, age, field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(`${firstName} ${lastName}`);
      });
      resolve(fields);
    }
  });
});
