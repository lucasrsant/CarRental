import { Model } from '../models/model';
import { Observable } from '../../../node_modules/rxjs';

export interface Repository<T extends Model<R>, R> {
    find(id: R): Observable<T>;
    findAll(): Promise<Array<T>>;
    insert(entity: T): Promise<T>;
    update(entity: T): Promise<void>;
    remove(id: R): Promise<void>;
}