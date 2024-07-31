import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenderDto } from './dtos/create-gender.dts';
import { UpdateGenderDto } from './dtos/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GendersService {
    constructor(
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>,
) {}

async create(createGenderDto: CreateGenderDto): Promise<Gender> {
    const category = this.genderRepository.create({
        ...createGenderDto,
        registrionDate: new Date(),
    });
    return this.genderRepository.save(category);
}

async findAll(): Promise<Gender[]> {
    return this.genderRepository.find();
}

async findOne(id: string): Promise<Gender> {
    return this.genderRepository.findOneBy({ id });
}

async update(id: string, updateGenderDto: UpdateGenderDto): Promise<Gender> {
    await this.genderRepository.update(id, updateGenderDto);
    return this.genderRepository.findOneBy({ id });
}
}