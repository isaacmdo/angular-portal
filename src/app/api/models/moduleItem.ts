import { ModuleMenu } from "./moduleMenu";

export class ModuleItem {
  id: number;
  name: string;
  icon: string;
  sequence: number;
  moduleMenu: Array<ModuleMenu>;
}
