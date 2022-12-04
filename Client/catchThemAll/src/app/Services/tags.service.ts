import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Tags } from '../Interfaces/ITags';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  serverUrl: string = "https://localhost:7032/"

  constructor(private http: HttpClient) { }

  getTagsList(): Observable<Tags[]> {
    return this.http.get<Tags[]>(this.serverUrl + "Tags/Get").pipe(
      map(obj => obj.map(obj => Tags.clone(obj))),
      catchError(error => this.processError(error))
    );
  }

  private processError(error: any): Observable<never> {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        console.log("Server not available")
        return EMPTY
      }
      if (error.status >= 500) {
        console.log("Server has serious problems, see in the log...")
        console.error(error)
      }
      const message = error.error.errorMessage ? error.error.errorMessage
        : JSON.parse(error.error).errorMessage
      return EMPTY
    }
    console.error(error)
    return EMPTY
  }
}

/*
{
  "tags": [
    {
      "name": "python",
      "count": 0
    },
    {
      "name": "python",
      "count": 0
    },
    {
      "name": "java",
      "count": 0
    }
  ]
}
*/
