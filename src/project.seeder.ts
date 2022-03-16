import { SuggestsService } from './modules/database/services/tbl_suggest.service';
import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import * as fs from 'fs';
import {readFile} from './helpers/file';

@Injectable()
export class ProjectSeeder implements Seeder {
  constructor(
    private readonly suggestsService: SuggestsService,
  ) {}

  async seed(): Promise<any> {
    //await this.standardManagerService.initData();
    //await this.countingManagerService.insertMany(COUTING_LIST);
    // let r = await this.suggestsService.insert({
    //   text: 'abc',
    // });

    try {
      readFile('');
    } catch (err) {
      console.error(err);
    }
    // let agent = await this.groupService.insert({
    //   name: Roles.ADMIN_AGENT,
    //   level: ROLE_LEVEL.ADMIN_AGENT,
    //   description: 'Quản trị đại lý',
    // });
    // let staff = await this.groupService.insert({
    //   name: Roles.STAFF,
    //   level: ROLE_LEVEL.STAFF,
    //   description: 'Nhân viên đại lý',
    // });


    // await Promise.all(
    //   ['tác chiến không gian mạng', 'tác chiến thông tin'].map((item) => {
    //     return new Promise(async (resolve) => {
    //       await this.suggestsService.insert({
    //         text: item,
    //       });
    //       resolve(true);
    //     });
    //   }),
    // );

    return true;
  }

  async drop(): Promise<any> {
    return false;
  }
}
