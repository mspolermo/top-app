export declare enum TopLevelCategory {
    Courses = 0,
    Services = 1,
    Books = 2,
    Products = 3
}
export declare class TopPageModel {
    _id: string;
    firstCategory: TopLevelCategory;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    hh?: {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };
    advantages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
