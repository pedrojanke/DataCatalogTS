import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { ClassificationsModule } from './classifications/classifications.module';
import { Classification } from './classifications/entities/classification.entity';

@Module({
    imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'datacatalogts',
        entities: [Category, Classification],
        synchronize: true,
    }),
    CategoriesModule,
    ClassificationsModule,
],
})
export class AppModule {}
