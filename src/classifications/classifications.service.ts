import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassificationDto } from './dtos/create-classification.dto';
import { UpdateClassificationDto } from './dtos/update-classification.dto';
import { Classification } from './entities/classification.entity';

@Injectable()
export class ClassificationsService {
    constructor(
    @InjectRepository(Classification)
    private readonly classificationRepository: Repository<Classification>,
) {}

async create(createClassificationDto: CreateClassificationDto): Promise<Classification> {
    const category = this.classificationRepository.create({
        ...createClassificationDto,
        registrionDate: new Date(),
    });
    return this.classificationRepository.save(category);
}

async findAll(): Promise<Classification[]> {
    return this.classificationRepository.find();
}

async findOne(id: string): Promise<Classification> {
    return this.classificationRepository.findOneBy({ id });
}

async update(id: string, updateClassificationDto: UpdateClassificationDto): Promise<Classification> {
    await this.classificationRepository.update(id, updateClassificationDto);
    return this.classificationRepository.findOneBy({ id });
}
}
