export interface BasicTODO {
  id: number;
  finished: boolean;
  description: string;
}

export interface TimedTODO extends BasicTODO {
  //...
}

export interface AdvancedTODO extends TimedTODO {
  //...
}

export type Todo = BasicTODO | TimedTODO | AdvancedTODO;

export type CreateBasicTODO = Partial<Omit<BasicTODO, 'id' | 'finished'>>
// export type CreateTimedTODO = ...
// export type CreateAdvancedTODO = ...