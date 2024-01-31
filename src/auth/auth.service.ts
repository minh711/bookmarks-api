import { Injectable } from "@nestjs/common";
import { User, Bookmark } from '@prisma/client'

@Injectable({})
export class AuthService {

  signup() {
    return { msg: 'I am signed up' };
  }
  
  signin() {
    return { msg: 'I am signing in' };
  } 
}