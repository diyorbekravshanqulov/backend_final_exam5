import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovieActorService } from './movie-actor.service';
import { CreateMovieActorDto } from './dto/create-movie-actor.dto';
import { UpdateMovieActorDto } from './dto/update-movie-actor.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Movie Actors') // Grouping endpoints under 'Movie Actors' tag
@Controller('movie-actor')
export class MovieActorController {
  constructor(private readonly movieActorService: MovieActorService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new movie-actor relationship' })
  @ApiBody({ type: CreateMovieActorDto })
  create(@Body() createMovieActorDto: CreateMovieActorDto) {
    return this.movieActorService.create(createMovieActorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movie-actor relationships' })
  findAll() {
    return this.movieActorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a movie-actor relationship by ID' })
  @ApiParam({
    name: 'id',
    description: 'Movie-actor relationship ID',
    type: 'number',
  })
  findOne(@Param('id') id: string) {
    return this.movieActorService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a movie-actor relationship by ID' })
  @ApiParam({
    name: 'id',
    description: 'Movie-actor relationship ID',
    type: 'number',
  })
  @ApiBody({ type: UpdateMovieActorDto })
  update(
    @Param('id') id: string,
    @Body() updateMovieActorDto: UpdateMovieActorDto,
  ) {
    return this.movieActorService.update(+id, updateMovieActorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a movie-actor relationship by ID' })
  @ApiParam({
    name: 'id',
    description: 'Movie-actor relationship ID',
    type: 'number',
  })
  remove(@Param('id') id: string) {
    return this.movieActorService.remove(+id);
  }
}
