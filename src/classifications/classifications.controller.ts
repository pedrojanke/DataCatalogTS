import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ClassificationsService } from './classifications.service';
import { CreateClassificationDto } from './dtos/create-classification.dto';
import { UpdateClassificationDto } from './dtos/update-classification.dto';

@Controller('classifications')
export class ClassificationsController {
    constructor(private readonly classificationsService: ClassificationsService) {}
    
    @Post()
    async create(@Body() createClassificationDto: CreateClassificationDto) {
    return this.classificationsService.create(createClassificationDto);
}

@Get()
async findAll() {
    return this.classificationsService.findAll();
}

@Get(':id')
async findOne(@Param('id') id: string) {
    return this.classificationsService.findOne(id);
}

@Patch(':id')
async update(
    @Param('id') id: string,
    @Body() updateClassificationDto: UpdateClassificationDto,
) {
    return this.classificationsService.update(id, updateClassificationDto);
}
}
