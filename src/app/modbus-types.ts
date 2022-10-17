export interface ModBusDevice {
  did: string;
  name: string;
  models: ModBusModel[];
}

export interface ModBusModel {
  ID: number;
  L: number;

  // Keys can be strings, numbers, or symbols.
  // If you know it to be strings only, you can also restrict it to that.
  // For the value you can use any or unknown, 
  // with unknown being the more defensive approach.
  [x: string | number | symbol]: unknown;
}
