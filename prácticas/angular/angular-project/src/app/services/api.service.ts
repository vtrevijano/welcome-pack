import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Form } from '../shared/model/shared'

const URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor (private http: HttpClient) {}

  public getAllPosts (): Observable<Object> {
    return this.http.get(URL + '/posts')
  }
  public createPost (todo: Form): Observable<Object> {
    return this.http.post(URL + '/posts', todo)
  }

  public updatePost (todo: Form): Observable<Object> {
    return this.http.put(URL + '/posts/' + todo.id, todo)
  }
  public deleteTodoById (todoId: number): Observable<Object> {
    return this.http.delete(URL + '/posts/' + todoId)
  }
}
