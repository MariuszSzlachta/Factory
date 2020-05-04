import {ShapeFactory} from "./ShapeFactory";
import {Rectangle} from "../Rectangle";

export class RectangleFactory extends ShapeFactory {
    private readonly _color: string;

    private readonly _type: string;

    constructor(color: string, type: string) {
        super();
        this._color = color;
        this._type = type;
    }

    create() {
        return new Rectangle(this._color)
    }
}