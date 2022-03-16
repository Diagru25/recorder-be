import {readFileSync} from 'fs';
import * as path from 'path';

export const readFile = (filePath: string) => {
  // read contents of the file
  const data = readFileSync('a.txt', {encoding: 'utf8'});

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {
    console.log(line);
  });
  //const lines = data.split(/\r?\n/);
  //console.log(lines);
}