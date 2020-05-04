import {Shape} from "../commons/Shape";

export abstract class AbstractShapeFactory {
    abstract getShape(): Shape;
}