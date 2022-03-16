import { Document, Model } from 'mongoose';
import { IBaseService } from 'src/interfaces';
export declare class BaseService<T extends Document, dtoT> implements IBaseService<T, dtoT> {
    private readonly model;
    constructor(model: Model<T>);
    insert(entity: dtoT): Promise<import("mongoose").HydratedDocument<T, {}, {}>>;
    update(id: any, entity: dtoT): Promise<import("mongoose").HydratedDocument<T, {}, {}>>;
    remove(id: any, filter: any): Promise<import("mongoose").HydratedDocument<T, {}, {}>>;
    getAll(filter: any, page_index: number, page_size: number): Promise<any>;
    getOneById(id: string): Promise<import("mongoose").HydratedDocument<T, {}, {}>>;
    getOne(filter: {}): Promise<import("mongoose").HydratedDocument<T, {}, {}>>;
    getFilter(filter: any): Promise<any[]>;
}
