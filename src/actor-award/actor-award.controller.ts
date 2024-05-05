import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActorAwardService } from './actor-award.service';
import { CreateActorAwardDto } from './dto/create-actor-award.dto';
import { UpdateActorAwardDto } from './dto/update-actor-award.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ActorAward } from './model/actor-award.entity';

@ApiTags('actor-award')
@Controller('actor-award')
export class ActorAwardController {
  constructor(private readonly actorAwardService: ActorAwardService) {}

  @ApiOperation({ summary: 'Create a new actor award' })
  @ApiResponse({ status: 201, type: ActorAward })
  @Post()
  create(@Body() createActorAwardDto: CreateActorAwardDto) {
    return this.actorAwardService.create(createActorAwardDto);
  }

  @ApiOperation({ summary: 'Get all actor awards' })
  @ApiResponse({ status: 200, type: [ActorAward] })
  @Get()
  findAll() {
    return this.actorAwardService.findAll();
  }

  @ApiOperation({ summary: 'Get an actor award by ID' })
  @ApiResponse({ status: 200, type: ActorAward })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorAwardService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update an actor award by ID' })
  @ApiResponse({ status: 200, type: ActorAward })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActorAwardDto: UpdateActorAwardDto,
  ) {
    return this.actorAwardService.update(+id, updateActorAwardDto);
  }

  @ApiOperation({ summary: 'Delete an actor award by ID' })
  @ApiResponse({ status: 200, description: 'Actor award deleted successfully' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorAwardService.remove(+id);
  }
}
