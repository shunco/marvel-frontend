
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError, tap  } from 'rxjs';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { JwtDTO } from '../../models/JwtDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {
  }

  authenticate(authenticationRequest:AuthenticationRequest): Observable<JwtDTO> {
    const url: string = "http://localhost:8080/authentication/login";
    return this.http.post<JwtDTO>(url, authenticationRequest).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error ', error.error);
    } else {
      console.error('Se recibió un error con código de estado ', error.status, error.error);
    }

    return throwError( () => new Error('Algo salió mal. Favor de reintentar') );
  }
}
