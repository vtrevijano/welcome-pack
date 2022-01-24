import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.scss']
})
export class FormDeleteComponent implements OnInit {
  public userRegisterForm!: FormGroup;
  public posts: any;
  // variable submitted a false
  public submitted: boolean = false;
  public deletePosts: any = 0
  
  constructor(private request: ApiService, private formBuilder: FormBuilder) {
    this.userRegisterForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  ngOnInit(): void {
  }
  deletePost = () => {
    this.request.deleteTodoById(this.deletePosts.id).subscribe((results) => {
      this.posts = results;
      console.log(this.posts);
    });
  };

  public onSubmit(): void {
    
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.userRegisterForm.valid) {
      // Creamos un Usuario y lo emitimos
      const user: Object = {
        id: this.userRegisterForm.get('id')?.value,
      };
      this.deletePosts = user
      this.deletePost()
      console.log(user);
      console.log(this.deletePosts)
      // Reseteamos todos los campos y el indicador de envío o submitted
      this.userRegisterForm.reset();
      this.submitted = false;
    }
  }

}
