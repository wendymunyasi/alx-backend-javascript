import fs from 'fs';

export const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
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
  };
  
  