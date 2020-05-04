import { AbstractShapeFactory } from "./AbstractShapeFactory";
import { Shape } from "../commons/Shape";
import { CircleFactory } from "../factoryMethod/CircleFactory";

export class RoundedShapeFactory extends AbstractShapeFactory {
    private readonly _color: string;

    private readonly _type: string;

    constructor(color: string, type: string) {
        super();
        this._color = color;
        this._type = type;
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