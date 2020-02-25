import { Component } from '@angular/core';
import { employee } from './models/employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular CLI';
  lista:string[]=["hola","que","tal", "estas"];
  EmployeeArray: employee [] = [
    {Operador: "LFLN", Turno: "DIA", Area: "Respaldos", id:1},
    {Operador: "DFRD", Turno: "DIA", Area: "Catalogacion", id:2},
    {Operador: "JG", Turno: "NOCHE", Area: "Respaldos", id:3}
  ];
  selectedEmployee: employee = new employee();

  addOrEdit(){
    if (this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.EmployeeArray.length + 1;
    this.EmployeeArray.push(this.selectedEmployee);
    this.selectedEmployee = new employee();
    }
    this.selectedEmployee = new employee();
  }; 

  openForEdit(employee: employee){
    this.selectedEmployee = employee;
  }
}
