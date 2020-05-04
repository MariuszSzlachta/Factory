import {Shape} from "../Shape";

export abstract class AbstractShapeFactory {
    abstract getShape(): Shape;
}