import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface ReviewModel extends Base {
}
export declare class ReviewModel extends TimeStamps {
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}
