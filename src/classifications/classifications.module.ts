import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassificationsController } from './classifications.controller';
import { ClassificationsService } from './classifications.service';
import { Classification } from './entities/classification.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Classification])],
    controllers: [ClassificationsController],
    providers: [ClassificationsService],
    exports: [ClassificationsService],
})
export class ClassificationsModule {}
