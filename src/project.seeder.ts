import { IconsService } from './modules/database/services/tbl_icon.services';
import { DictionaryService } from './modules/database/services/tbl_dictionary.service';
import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { readFileLine } from './helpers/file_helpers';

@Injectable()
export class ProjectSeeder implements Seeder {
  constructor(
    private readonly DictionaryService: DictionaryService,
    private readonly iconService: IconsService,
  ) {}

  async seed(): Promise<any> {
    //await this.standardManagerService.initData();
    //await this.countingManagerService.insertMany(COUTING_LIST);
    // let r = await this.suggestsService.insert({
    //   text: 'abc',
    // });

    let lines = readFileLine('assets/f1.txt', 'utf16le');
    let icons = readFileLine('assets/icons.txt', 'utf8');
    console.log(icons);
    // await Promise.all(
    //   lines.map((item) => {
    //     return new Promise(async (resolve) => {
    //       await this.DictionaryService.insert({
    //         text: item,
    //       });
    //       resolve(true);
    //     });
    //   }),
    // );

    await Promise.all(
      icons.map((item, index) => {
        return new Promise(async (resolve) => {
          await this.iconService.insert({
            name: item,
            command: [item],
            icon: `assets\\images\\icons\\${index + 1}.png`,
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
