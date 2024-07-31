import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateGenderDto } from './dtos/create-gender.dts';
import { UpdateGenderDto } from './dtos/update-gender.dto';
import { GendersService } from './genders.service';

@Controller('genders')
export class GendersController {
    constructor(private readonly gendersService: GendersService) {}
    
    @Post()
    async create(@Body() createClassificationDto: CreateGenderDto) {
    return this.gendersService.create(createClassificationDto);
}

@Get()
async findAll() {
    return this.gendersService.findAll();
}

@Get(':id')
async findOne(@Param('id') id: string) {
    return this.gendersService.findOne(id);
}

@Patch(':id')
async update(
    @Param('id') id: string,
    @Body() updateClassificationDto: UpdateGenderDto,
) {
    return this.gendersService.update(id, updateClassificationDto);
}
}
