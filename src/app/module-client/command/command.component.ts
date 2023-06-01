import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Foods } from 'src/app/shared/model/food';
import { Command } from '../../shared/model/command';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/model/client';
import { CommandLine } from 'src/app/shared/model/command-line';
import { CommandService } from '../../services/command.service';
import { Router } from '@angular/router';
import { MyValidatorsService } from 'src/app/services/my-validators.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit{

  public commandFoods!: Foods[];
  public errorMessage!: string;
  public totalPrice: number = 0;

  public commandLines: CommandLine[] = [];

  public commandFormGroup!: FormGroup;

  constructor(private cartService: CartService,
    private fb: FormBuilder,
    private cmdService: CommandService,
    private router: Router,
    public myValService: MyValidatorsService){
  }

  ngOnInit(): void {
    /* this.cartService.getCartFoods().subscribe({
      next: data => {
        this.commandFoods = data;
        this.commandFoods.forEach(f =>{
          this.totalPrice += f.price;
        })
        console.log("Mes foods ", this.commandFoods)
      },
      error: err => {
        this.errorMessage = err;
        console.log("Une erreur",err);
      }
    }); */

    this.cmdService.getCommandLines().subscribe({
      next: data => {
        this.commandLines = data;
        this.commandLines.forEach(cmdLine => {
          this.totalPrice += cmdLine.totalPrice;
        })
      },
      error: err => {
        console.log(err);
      }
    })

    this.commandFormGroup = this.fb.group({
      firstname: this.fb.control('', Validators.required),
      lastname: ['', [Validators.required]],
      bithdate: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      country: ['', [Validators.required]],
      region: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  public handleCommandClicked(){
    let firstname = this.commandFormGroup.value.firstname;
    let lastname = this.commandFormGroup.value.lastname;
    let bithdate = this.commandFormGroup.value.bithdate;
    let email = this.commandFormGroup.value.email;
    let country = this.commandFormGroup.value.country;
    let region = this.commandFormGroup.value.region;
    let address = this.commandFormGroup.value.address;

    let client: Client = {
      firstname: firstname,
      lastname: lastname,
      bithdate: bithdate,
      email: email,
      country: country,
      region: region,
      address: address
    }

    /* this.commandFoods.forEach(element => {
      let commandLine: CommandLine = {
        food: element,
        quantity: 1,
        totalPrice: element.price
      }
      this.commandLines.push(commandLine);
    }); */

    let command: Command = {
      client: client,
      commands: this.commandLines,
      date: new Date()
    }

    this.cmdService.addCommand(command).subscribe({
      next: data => {
        console.log(data);
        this.router.navigateByUrl("/client/command_success");
      }
    });
  }

  public setCommandPassed(){

  }

}
