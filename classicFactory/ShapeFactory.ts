import { Shape } from "../commons/Shape";
import { Circle } from "../commons/Circle";
import { Rectangle } from "../commons/Rectangle";
import { Triangle } from "../commons/Triangle";

export class ShapeFactory {
    private readonly _color: string;

    private readonly _type: string;

    constructor(color: string, type: string) {
        this._color = color;
        this._type = type;
    }

    getShape(): Shape {
        switch(this._type) {
            case "circle":
                return new Circle(this._color);

            case "rectangle":
                return new Rectangle(this._color);

            case "triangle":
                return new Triangle(this._color);

            default:
                throw Error("Unrecognized type");
        }
    }
}