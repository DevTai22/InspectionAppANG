import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly InspectionAPIUrl = "https://localhost:7240/api";

  constructor(private http: HttpClient) { }

  getInspectionList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.InspectionAPIUrl}/Inspections`);
  }

  addInspection(data: any) {
    return this.http.post(`${this.InspectionAPIUrl}/Inspections`, data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(`${this.InspectionAPIUrl}/Inspections/${id}`, data);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(`${this.InspectionAPIUrl}/Inspections/${id}`);
  }

  // Inspection Types

  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.InspectionAPIUrl}/InspectionTypes`);
  }

  addInspectionTypes(data: any) {
    return this.http.post(`${this.InspectionAPIUrl}/InspectionTypes`, data);
  }

  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(`${this.InspectionAPIUrl}/InspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id: number | string) {
    return this.http.delete(`${this.InspectionAPIUrl}/InspectionTypes/${id}`);
  }

  // Statuses

  getStatusList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.InspectionAPIUrl}/Status`);
  }

  addStatus(data: any) {
    return this.http.post(`${this.InspectionAPIUrl}/Status`, data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(`${this.InspectionAPIUrl}/Status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(`${this.InspectionAPIUrl}/Status/${id}`);
  }
}
