import {Task} from './Task'

export interface Card {
  id?: number;
  name: string;
  owner: string;
  tasks?: Task[];
}