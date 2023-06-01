import { Foods } from "./food";

export interface CommandLine {
    food : Foods,
    quantity: number,
    totalPrice: number
}