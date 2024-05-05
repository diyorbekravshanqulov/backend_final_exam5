import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { AwardService } from './award.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './model/award.entity';

@ApiTags('Awards') // Grouping endpoints under 'Awards' tag
@Controller('award')
export class AwardController {
  constructor(private readonly awardService: AwardService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new award' })
  @ApiBody({ type: CreateAwardDto })
  create(@Body() createAwardDto: CreateAwardDto) {
    return this.awardService.create(createAwardDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all awards' })
  findAll() {
    return this.awardService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an award by ID' })
  @ApiParam({ name: 'id', description: 'Award ID', type: 'number' })
  findOne(@Param('id') id: string) {
    return this.awardService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing award' })
  @ApiParam({ name: 'id', description: 'Award ID', type: 'number' })
  @ApiBody({ type: UpdateAwardDto })
  update(@Param('id') id: string, @Body() updateAwardDto: UpdateAwardDto) {
    return this.awardService.update(+id, updateAwardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an award by ID' })
  @ApiParam({ name: 'id', description: 'Award ID', type: 'number' })
  remove(@Param('id') id: string) {
    return this.awardService.remove(+id);
  }
}
