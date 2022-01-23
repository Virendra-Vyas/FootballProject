import { Positions } from "./positions";

export interface Player {
  id: number;
  shirtNo: number;
  name: string;
  positionId?: number;
  appearances?: number;
  goals?: number;
  goalsPerMatch?: number;
  position?: Positions;
}
