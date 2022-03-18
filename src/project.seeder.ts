import { SuggestService } from './modules/database/services/tbl_suggest.service';
import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { readFileLine } from './helpers/file_helpers';

@Injectable()
export class ProjectSeeder implements Seeder {
  constructor(private readonly suggestsService: SuggestService) {}

  async seed(): Promise<any> {
    //await this.standardManagerService.initData();
    //await this.countingManagerService.insertMany(COUTING_LIST);
    // let r = await this.suggestsService.insert({
    //   text: 'abc',
    // });

    let lines = readFileLine('assets/f1.txt', 'utf16le');

    await Promise.all(
      lines.map((item) => {
        return new Promise(async (resolve) => {
          await this.suggestsService.insert({
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
