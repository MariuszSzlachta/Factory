import { Shape } from "./Shape";

export class Triangle implements Shape{
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    draw(): void {
    }
}