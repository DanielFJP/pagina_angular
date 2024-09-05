import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  currentNumber: number | null = null;
  previousNumber: number | null = null;
  operation: string | null = null;
  result: number | null = null;

  setOperation(op: string): void {
    if (this.currentNumber !== null) {
      this.previousNumber = this.currentNumber;
      this.currentNumber = null;
      this.operation = op;
    }
  }

  calculate(): void {
    if (this.previousNumber !== null && this.currentNumber !== null && this.operation) {
      switch (this.operation) {
        case '+':
          this.result = this.previousNumber + this.currentNumber;
          break;
        case '-':
          this.result = this.previousNumber - this.currentNumber;
          break;
        case '*':
          this.result = this.previousNumber * this.currentNumber;
          break;
        case '/':
          this.result = this.previousNumber / this.currentNumber;
          break;
      }
    } else {
      this.result = null;
    }
  }

}
