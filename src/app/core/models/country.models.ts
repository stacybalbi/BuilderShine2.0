import { BaseModels } from "./base.models";
import { CostCenter } from "./cost-center.models";

export interface Country extends BaseModels{

    name: string,
    costCenter: CostCenter
}