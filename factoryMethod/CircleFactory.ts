import {ShapeFactory} from "./ShapeFactory";
import {Circle} from "../Circle";

export class CircleFactory extends ShapeFactory {
    private readonly _color: string;

    private readonly _type: string;

    constructor(color: string, type: string) {
        super();
        this._color = color;
        this._type = type;
    }

    create() {
        return new Circle(this._color)
    }
}