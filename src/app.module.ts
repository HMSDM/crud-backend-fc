import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://melohenrique1999:123dasilva45@cluster0.uoqqqay.mongodb.net/test?retryWrites=true&w=majority'),
    UserModule,
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
})
export class AppModule {
}
