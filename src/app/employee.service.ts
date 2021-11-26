import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  private apiServiceUrl = '';

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employees`);
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServiceUrl}/employees`, employee);
  }

  public updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServiceUrl}/employees/${employeeId}`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServiceUrl}/employees/${employeeId}`);
  }
}
