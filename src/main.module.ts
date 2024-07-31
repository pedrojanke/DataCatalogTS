import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { ClassificationsModule } from './classifications/classifications.module';
import { Classification } from './classifications/entities/classification.entity';
import { Gender } from './genders/entities/gender.entity';
import { GendersModule } from './genders/genders.module';

@Module({
    imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'datacatalogts',
        entities: [Category, Classification, Gender],
        synchronize: true,
    }),
    CategoriesModule,
    ClassificationsModule,
    GendersModule,
],
})
export class AppModule {}
