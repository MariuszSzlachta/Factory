import { ShapeFactory } from "./ShapeFactory";
import { Circle } from "../commons/Circle";

export class CircleFactory extends ShapeFactory {
    private readonly _color: string;

    constructor(color: string) {
        super();
        this._color = color;
    }

    create() {
        return new Circle(this._color)
    }
}