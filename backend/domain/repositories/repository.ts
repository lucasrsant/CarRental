import { Model } from '../models/model';

export interface Repository<T extends Model<R>, R> {
    find(id: R): Promise<T>;
    findAll(): Promise<Array<T>>;
    insert(entity: T): Promise<T>;
    update(entity: T): Promise<void>;
    remove(id: R): Promise<void>;
}