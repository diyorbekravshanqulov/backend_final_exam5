import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovieTypeService } from './movie-type.service';
import { CreateMovieTypeDto } from './dto/create-movie-type.dto';
import { UpdateMovieTypeDto } from './dto/update-movie-type.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Movie Types') // Grouping endpoints under 'Movie Types' tag
@Controller('movie-type')
export class MovieTypeController {
  constructor(private readonly movieTypeService: MovieTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new movie type' })
  @ApiBody({ type: CreateMovieTypeDto })
  create(@Body() createMovieTypeDto: CreateMovieTypeDto) {
    return this.movieTypeService.create(createMovieTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movie types' })
  findAll() {
    return this.movieTypeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a movie type by ID' })
  @ApiParam({ name: 'id', description: 'Movie type ID', type: 'number' })
  findOne(@Param('id') id: string) {
    return this.movieTypeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a movie type by ID' })
  @ApiParam({ name: 'id', description: 'Movie type ID', type: 'number' })
  @ApiBody({ type: UpdateMovieTypeDto })
  update(
    @Param('id') id: string,
    @Body() updateMovieTypeDto: UpdateMovieTypeDto,
  ) {
    return this.movieTypeService.update(+id, updateMovieTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a movie type by ID' })
  @ApiParam({ name: 'id', description: 'Movie type ID', type: 'number' })
  remove(@Param('id') id: string) {
    return this.movieTypeService.remove(+id);
  }
}
