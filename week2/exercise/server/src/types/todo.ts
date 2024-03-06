export interface BasicTODO {
  id: string;
  finished: boolean;

  description: string;
}

export interface TimedTODO extends BasicTODO {
  dateAndTime: Date;
}

export interface AdvancedTODO extends TimedTODO {
  location: string
}

export type Todo = BasicTODO | TimedTODO | AdvancedTODO;

export type CreateBasicTODO = Omit<BasicTODO, 'id' | 'finished'>;
export type CreateTimedTODO = Omit<TimedTODO, 'id' | 'finished'>;
export type CreateAdvancedTODO = Omit<AdvancedTODO, 'id' | 'finished'>;
export type CreateTODO = Omit<Todo, 'id' | 'finished'>;

export type EditBasicTODO = Partial<BasicTODO> & Pick<BasicTODO, 'id'>;
export type EditTimedTODO = Partial<TimedTODO> & Pick<TimedTODO, 'id'>;
export type EditAdvancedTODO = Partial<AdvancedTODO> & Pick<AdvancedTODO, 'id'>;
export type EditTODO = Partial<Todo> & Pick<Todo, 'id'>;

