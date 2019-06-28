import { ITicket } from 'app/shared/model/ticket.model';

export interface ILabel {
  id?: string;
  label?: string;
  tickets?: ITicket[];
}

export class Label implements ILabel {
  constructor(public id?: string, public label?: string, public tickets?: ITicket[]) {}
}
