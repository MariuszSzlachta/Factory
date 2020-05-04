import {ShapeFactory} from "./ShapeFactory";
import {Triangle} from "../Triangle";

export class TriangleFactory extends ShapeFactory {
    private readonly _color: string;


    constructor(color: string) {
        super();
        this._color = color;
    }

    create() {
        return new Triangle(this._color)
    }
}