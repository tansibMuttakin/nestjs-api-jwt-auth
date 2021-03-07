import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {CreateUserDto} from './dto/create-user.dto'
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    
}
