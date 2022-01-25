import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/services/api.service'
import { Form } from 'src/app/shared/model/shared'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {
  // Incialización del formulario
  public userRegisterForm!: FormGroup
  // variable submitted a false
  public submitted: boolean = false
  public posts: any
  public updatePosts: Form = {
    id: 0,
    title: '',
    author: ''
  }
  constructor (private request: ApiService, private formBuilder: FormBuilder) {
    this.userRegisterForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(20)]],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      author: ['', [Validators.required, Validators.maxLength(20)]]
    })
  }

  ngOnInit (): void {}
  updatePost = () => {
    this.request.updatePost(this.updatePosts).subscribe(results => {
      this.posts = results
      console.log(this.posts)
    })
  }
  public onSubmit (): void {
    this.submitted = true
    if (this.userRegisterForm.valid) {
      const user: Form = {
        id: this.userRegisterForm.get('id')?.value,
        title: this.userRegisterForm.get('title')?.value,
        author: this.userRegisterForm.get('author')?.value
      }
      this.updatePosts = user
      this.updatePost()
      console.log(user)
      console.log(this.updatePosts)
      this.userRegisterForm.reset()
      this.submitted = false
    }
  }
}
