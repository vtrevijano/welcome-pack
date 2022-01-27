import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api.service'
import { FormDelete } from 'src/app/shared/model/shared'

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.scss']
})
export class FormDeleteComponent{
  public userRegisterForm!: FormGroup
  public posts?: Object
  public submitted: boolean = false
  public deletePosts?: FormDelete;

  constructor (private request: ApiService, private formBuilder: FormBuilder) {
    this.userRegisterForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(1)]]
    })
  }

  deletePost ():void {
    if (this.deletePosts) {
      this.request.deleteTodoById(this.deletePosts.id).subscribe(results => {
        this.posts = results
        console.log(this.posts)
      })
    }
  }

  public onSubmit (): void {
    this.submitted = true
    if (this.userRegisterForm.valid) {
      const user: FormDelete = {
        id: this.userRegisterForm.get('id')?.value
      }
      this.deletePosts = user
      this.deletePost()
      this.userRegisterForm.reset()
      this.submitted = false
    }
  }
}
