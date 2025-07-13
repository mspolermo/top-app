/// <reference types="mongoose" />
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';
import { TopPageService } from './top-page.service';
export declare class TopPageController {
    private readonly topPageService;
    constructor(topPageService: TopPageService);
    create(dto: CreateTopPageDto): Promise<import("mongoose").Document>;
    getByAlias(alias: string): Promise<import("@typegoose/typegoose").DocumentType<TopPageModel>>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<TopPageModel>>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: CreateTopPageDto): Promise<import("@typegoose/typegoose").DocumentType<TopPageModel>>;
    find(dto: FindTopPageDto): Promise<import("@typegoose/typegoose").DocumentType<TopPageModel>[]>;
}
