const fs = require('fs');

const targetPath = 'src/environments/environments.prod.ts';
const file = fs.readFileSync(targetPath ,'utf8');
const newFile = file.replace('TESTOSECRET', '${process.env.GOOGLE_API_KEY}');

fs.writeFileSync(targetPath , newFile);