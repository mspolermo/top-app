import { ReviewModel } from './review.model';
export declare class ReviewController {
    create(dto: Omit<ReviewModel, '_id'>): Promise<void>;
    delete(id: string): Promise<void>;
    getByProduct(productId: string): Promise<void>;
}
