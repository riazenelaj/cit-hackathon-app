import { Module } from '@nestjs/common';
import { ChallengeModule } from './challenge/challenge.module';
import { EventModule } from './event/event.module';
import { PostModule } from './post/post.module';
import { ChallengeEntryModule } from './challenge-entry/challenge-entry.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCommentModule } from './post-comment/post-comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      username: process.env.MYSQL_USER || 'nest',
      password: process.env.MYSQL_PASSWORD || 'nest',
      database: process.env.MYSQL_DATABASE || 'nest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      // dropSchema: true,
      // charset: process.env.MYSQL_CHARSET || 'latin1',
      charset: 'utf8mb4',
      // logging: true,
      bigNumberStrings: false,
    }),
    ChallengeModule,
    EventModule,
    PostModule,
    ChallengeEntryModule,
    PostCommentModule,
  ],
})
export class AppModule {}
