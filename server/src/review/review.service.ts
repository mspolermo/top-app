import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ReviewService {
	//@ts-ignore
	constructor(@InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>) { }

async create(dto: CreateReviewDto) {
	return this.reviewModel.create({
		...(dto as any),
		productId: new Types.ObjectId(dto.productId),
	});
}

	async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]> {
		return this.reviewModel.find({ productId: Types.ObjectId(productId) }).exec();
	}

	async deleteByProductId(productId: string) {
		return this.reviewModel.deleteMany({ productId: Types.ObjectId(productId) }).exec();
	}
}
