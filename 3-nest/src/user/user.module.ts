import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as admin from 'firebase-admin';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
