export interface IPost{
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type IPostCreateDto = Omit<IPost, 'id'>;