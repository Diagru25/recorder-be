import { DictionaryService } from './modules/database/services/tbl_dictionary.service';
import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { readFileLine } from './helpers/file_helpers';

@Injectable()
export class ProjectSeeder implements Seeder {
  constructor(private readonly DictionaryService: DictionaryService) {}

  async seed(): Promise<any> {
    //await this.standardManagerService.initData();
    //await this.countingManagerService.insertMany(COUTING_LIST);
    // let r = await this.suggestsService.insert({
    //   text: 'abc',
    // });


    

    let lines = readFileLine('assets/f1.txt', 'utf16le');
    //console.log(lines[99]);
    await Promise.all(
      lines.map((item) => {
        return new Promise(async (resolve) => {
          await this.DictionaryService.insert({
            text: item,
          });
          resolve(true);
        });
      }),
    );

    return true;
  }

  async drop(): Promise<any> {
    return false;
  }
}
