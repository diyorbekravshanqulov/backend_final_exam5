import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Actor } from './model/actor.entity';

@ApiTags('actor')
@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @ApiOperation({ summary: 'Create a new actor' })
  @ApiResponse({ status: 201, type: Actor })
  @Post()
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  @ApiOperation({ summary: 'Get all actors' })
  @ApiResponse({ status: 200, type: [Actor] })
  @Get()
  findAll() {
    return this.actorService.findAll();
  }

  @ApiOperation({ summary: 'Get an actor by ID' })
  @ApiResponse({ status: 200, type: Actor })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update an actor by ID' })
  @ApiResponse({ status: 200, type: Actor })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(+id, updateActorDto);
  }

  @ApiOperation({ summary: 'Delete an actor by ID' })
  @ApiResponse({ status: 200, description: 'Actor deleted successfully' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorService.remove(+id);
  }
}
