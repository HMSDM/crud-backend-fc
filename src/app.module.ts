import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://melohenrique1999:123dasilva45@cluster0.uoqqqay.mongodb.net/test?retryWrites=true&w=majority'),
    UserModule,
    AuthModule,
    UsersModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: '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',
        },
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}