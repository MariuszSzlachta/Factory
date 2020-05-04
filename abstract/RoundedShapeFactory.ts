import { AbstractShapeFactory } from "./AbstractShapeFactory";
import { Shape } from "../Shape";
import { Circle } from "../Circle";

export class RoundedShapeFactory extends AbstractShapeFactory {
    private readonly _color: string;

    private readonly _type: string;

    constructor(color: string, type: string) {
        super();
        this._color = color;
        this._type = type;
    }

    getShape(): Shape {
        switch (true) {
            case this._type === "circle":
                return new Circle(this._color);

            default:
                throw Error("Unrecognized type");
        }
    }
}