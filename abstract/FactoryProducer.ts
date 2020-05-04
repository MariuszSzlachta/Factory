import { AbstractShapeFactory } from "./AbstractShapeFactory";
import { RoundedShapeFactory } from "./RoundedShapeFactory";
import { CornerShapeFactory } from "./CornerShapeFactory";

export class FactoryProducer {
    public static getFactory(isRounded: boolean, options: any): AbstractShapeFactory {
        if (isRounded) {
            return new RoundedShapeFactory(options.color, options.type);
        }
        return new CornerShapeFactory(options.color, options.type);
    }
}