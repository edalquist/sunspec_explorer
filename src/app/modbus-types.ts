export interface ModBusDevice {
  did: string;
  name: string;
  models: ModBusModel[];
}

export interface ModBusModel {
  ID: number;
  L: number;
}
