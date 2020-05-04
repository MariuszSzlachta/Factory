import { AbstractShapeFactory } from "./AbstractShapeFactory";
import { Shape } from "../Shape";
import {Rectangle} from "../Rectangle";
import {Triangle} from "../Triangle";

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
                return new Rectangle(this._color);

            case "triangle":
                return new Triangle(this._color);

            default:
                throw Error("Unrecognized type");
        }
    }
}