const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(process.cwd(), '.env') });

function readFileTrim(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8').trim();
  } catch (error) {
    return undefined;
  }
}

function getEnvValue(name, aliases = []) {
  const keys = [name, ...aliases];

  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === 'string' && value.trim() !== '') {
      return value.trim();
    }
  }

  for (const key of keys) {
    const filePath = process.env[`${key}_FILE`];
    if (typeof filePath === 'string' && filePath.trim() !== '') {
      const fileValue = readFileTrim(filePath.trim());
      if (typeof fileValue === 'string' && fileValue !== '') {
        return fileValue;
      }
    }
  }

  return undefined;
}

module.exports = { getEnvValue };
