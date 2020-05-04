import { AbstractShapeFactory } from "./AbstractShapeFactory";
import { Shape } from "../Shape";
import { CircleFactory } from "../factoryMethod/CircleFactory";

export class RoundedShapeFactory extends AbstractShapeFactory {
    private readonly _color: string;

    private readonly _type: string;

    constructor(color: string) {
        super();
        this._color = color;
    }

    getShape(): Shape {
        switch (this._type) {
            case "circle":
                return new CircleFactory(this._color).create();

            default:
                throw Error("Unrecognized type");
        }
    }
}