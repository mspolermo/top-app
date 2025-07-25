/// <reference types="mongoose" />
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageService } from './top-page.service';
export declare class TopPageController {
    private readonly topPageService;
    constructor(topPageService: TopPageService);
    create(dto: CreateTopPageDto): Promise<import("mongoose").Document>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    getByAlias(alias: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: CreateTopPageDto): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    find(dto: FindTopPageDto): Promise<any>;
    textSearch(text: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>[]>;
}
