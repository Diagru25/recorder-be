import { tbl_lockip, LockIpDocument } from './../schema/tbl_lockip.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { tbl_user, UserDocument } from '../schema/tbl_user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { tbl_log, LogDocument } from '../schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(tbl_user.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(tbl_log.name)
    private readonly logModel: Model<LogDocument>,
    @InjectModel(tbl_lockip.name)
    private readonly LockIpModel: Model<LockIpDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
    ip: string,
  ): Promise<any> {

    const isLockedIp = await this.LockIpModel.findOne({ip: ip}).exec();

    if(isLockedIp)
        return {
            isValidate: false,
            description: 'ip da bi khoa'
        }
    //insert log
    const user = await this.userModel
      .findOne({
        $or: [
          { username: username },
          { email: username },
          { phone_number: username },
        ],
      })
      .exec();

    if (!user) {
      await this.logModel.create({
        ip: ip,
        time: new Date().getTime(),
        note: 'wrong username',
      });
      return {
        isValidate: false,
      };
    }
    if (user && (await bcrypt.compare(password, user.password)))
      return {
        isValidate: true,
        user,
      };
    await this.logModel.create({
      ip: ip,
      time: new Date().getTime(),
      note: 'wrong password',
    });

    //  count ip
    let dt = new Date();
    dt.setMinutes(dt.getMinutes() - 5);
    let from = dt.getTime();
    let to = new Date().getTime();
    const count = await this.logModel.count({ ip: ip, time: {$gte: from, $lte: to} });
    if(count >= 3)
        console.log(`ip: ${ip} should be locked!`)
        //await this.LockIpModel.create({ip: ip})
    return {
      isValidate: false,
    };
  }

  async login(user: any): Promise<any> {
    try {
      const payload = {
        sub: user._id,
      };

      return {
        isSuccess: true,
        status: HttpStatus.OK,
        data: {
          access_token: this.jwtService.sign(payload),
        },
      };
    } catch (error) {
      return {
        isSuccess: false,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
