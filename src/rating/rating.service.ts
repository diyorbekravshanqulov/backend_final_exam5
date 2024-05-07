import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Rating } from './model/rating.entity';

@Injectable()
export class RatingService {

  constructor(@InjectModel(Rating) private ratingModel: typeof Rating) {
    
  }

  async create(createRatingDto: CreateRatingDto) {
    return this.ratingModel.create(createRatingDto)
  }

 async findAll() {
    return this.ratingModel.findAll({include: { all: true }})
  }

 async findOne(id: number) {
    return this.ratingModel.findByPk(id)
  }

 async update(id: number, updateRatingDto: UpdateRatingDto) {
    const rating = await this.ratingModel.update(updateRatingDto, { where: { id }, returning: true} )
    return rating[1][0]
  }

 async remove(id: number) {
    const ratingRows = await this.ratingModel.destroy({ where: {id } })
    if(ratingRows==0) return "Not found"
    return "Successfully removed"
  }
}
