import { ModuleItem } from "./moduleItem";

export class Module {
    id: number;
    icon: string;
    name: string;
    sequence: number;
    moduleItem: Array<ModuleItem>;
  }