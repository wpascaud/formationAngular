import { ClientState } from '../enums/client-state.enum';

export interface Client {
  id: number;
  state: ClientState;
  name: string;
  email: string;
  ca: number;
  comment: string;
}
