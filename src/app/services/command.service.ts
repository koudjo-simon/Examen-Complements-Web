import { Injectable } from '@angular/core';
import { Command } from '../shared/model/command';
import { CommandLine } from '../shared/model/command-line';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private commandList: Command[] = [];
  private commandLineList: CommandLine[] = [];
  public commandPassed: boolean = false;

  constructor() { }

  public addCommand(cmd : Command): Observable<Command>{
    if (cmd == undefined) return throwError(() => new Error("Command add failed"));
    this.commandList.push(cmd);
    this.setCommandPassed();
    return of(cmd);
  }

  public setCommandLines(cmdLines : CommandLine[]){
    if (cmdLines.length > 0) {
      cmdLines.forEach(cmdLine => {
        this.commandLineList.push(cmdLine);
      })
    }
  }

  public getCommands(): Observable<Command[]>{
    if (this.commandList.length == 0) return throwError(() => new Error("Command List is empty"));
    return of(this.commandList);
  }

  public getCommandLines(): Observable<CommandLine[]>{
    if (this.commandLineList.length == 0) return throwError(() => new Error("Command Line list is empty."));
    return of(this.commandLineList);
  }

  private setCommandPassed(){
    this.commandPassed = true;
  }

  public isCommandPassed(): boolean{
    return this.commandPassed
  }

}
