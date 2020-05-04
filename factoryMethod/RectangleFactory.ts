import { ShapeFactory } from "./ShapeFactory";
import { Rectangle } from "../commons/Rectangle";

export class RectangleFactory extends ShapeFactory {
    private readonly _color: string;

    constructor(color: string) {
        super();
        this._color = color;
    }

    create() {
        return new Rectangle(this._color)
    }
}