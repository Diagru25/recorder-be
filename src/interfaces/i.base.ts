export interface IBaseService<T, dtoT> {
  insert(entity: dtoT): Promise<T>;

  update(id: string, entity: dtoT): Promise<T>;

  remove(id: string, entity: any);

  getAll(filter: any, page_index: number, page_size: number): Promise<T[]>;

  getOneById(id: string): Promise<T>;

  getOne(filter: any): Promise<T>;

  getFilter(filter: any): Promise<T[]>;
}