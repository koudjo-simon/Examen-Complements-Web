import { Client } from "./client";
import { CommandLine } from "./command-line";

export interface Command {
    client: Client,
    commands: CommandLine[],
    date : Date
}