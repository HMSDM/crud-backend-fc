import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { MailerService } from '@nestjs-modules/mailer';

@Controller()
export class UserController {
    constructor(private service: UserService, private mailService: MailerService) {
    }

    @Get('findById/:id')
    getUser(@Param() params) {
        return this.service.findById(params.id);
    }

    @Get('listAllUsers')
    getUsers() {
        return this.service.listAllUsers();
    }

    @Post('create')
    create(@Body() user: User) {
        return this.service.create(user);
    }

    @Post('login')
    login(@Body() data) {
        return this.service.login(data.email, data.password)
    }

    @Post('emailVerify')
    emailVerify(@Body() params) {
        return this.service.emailVerify(params.email, this.mailService)
    }

    @Put('update')
    update(@Body() user: User) {
        return this.service.update(user);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id)
    }
}


