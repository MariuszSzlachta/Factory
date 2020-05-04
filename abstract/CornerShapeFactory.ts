import { AbstractShapeFactory } from "./AbstractShapeFactory";
import { Shape } from "../commons/Shape";
import { RectangleFactory } from "../factoryMethod/RectangleFactory";
import { TriangleFactory } from "../factoryMethod/TriangleFactory";

export class CornerShapeFactory extends AbstractShapeFactory {
    private readonly _color: string;

    private readonly _type: string;

    constructor(color: string, type: string) {
        super();
        this._color = color;
        this._type = type;
    }

    getShape(): Shape {
        switch(this._type) {
            case "rectangle":
                return new RectangleFactory(this._color).create();

            case "triangle":
                return new TriangleFactory(this._color).create();

            default:
                throw Error("Unrecognized type");
        }
    }
}