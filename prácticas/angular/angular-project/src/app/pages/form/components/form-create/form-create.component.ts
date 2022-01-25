import { Component, OnInit } from '@angular/core'
import { Form } from 'src/app/shared/model/shared'
import { ApiService } from 'src/app/services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {
  public posts: any
  public newPost: Form = {
    id: 0,
    title: '',
    author: ''
  }
  public userRegisterForm!: FormGroup
  public submitted: boolean = false
  constructor (private request: ApiService, private formBuilder: FormBuilder) {
    this.userRegisterForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(20)]],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      author: ['', [Validators.required, Validators.maxLength(20)]]
    })
  }

  ngOnInit (): void {}
  createPost = () => {
    this.request.createPost(this.newPost).subscribe(results => {
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
      this.newPost = user
      this.createPost()
      console.log(user)
      console.log(this.newPost)
      this.userRegisterForm.reset()
      this.submitted = false
    }
  }
}
