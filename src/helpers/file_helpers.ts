import { readFileSync } from 'fs';

export const readFileLine = (filePath: string, encode: BufferEncoding = 'utf8'): string[] => {
  try {
    const file = readFileSync(filePath, { encoding: encode });
    const lines = file.split(/\r?\n/);
    return lines;
  } catch (err) {
    console.error(err);
    return [];
  }
};
