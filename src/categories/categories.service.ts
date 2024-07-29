import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
    constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
) {}

async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
}

async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
}

async findOne(id: string): Promise<Category> {
    return this.categoryRepository.findOneBy({ id });
}

async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    await this.categoryRepository.update(id, updateCategoryDto);
    return this.categoryRepository.findOneBy({ id });
}
}
