import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSuccessComponent } from './command-success.component';

describe('CommandSuccessComponent', () => {
  let component: CommandSuccessComponent;
  let fixture: ComponentFixture<CommandSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
