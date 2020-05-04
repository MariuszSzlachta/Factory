import { Shape } from "./Shape";

export class Circle implements Shape{
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    draw(): void {
    }
}