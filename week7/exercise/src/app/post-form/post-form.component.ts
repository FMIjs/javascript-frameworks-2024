import { Component, EventEmitter, Output } from '@angular/core';
import { IPostCreateDto } from '../interfaces/post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HashTagsValidator } from './hash-tags-validator';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() savePost = new EventEmitter<IPostCreateDto>();

  postForm = new FormGroup(
    { title : new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      body : new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      hashTags : new FormControl('', {
        validators: [ Validators.required, HashTagsValidator() ],
        updateOn: 'change'
      }),
      userId : new FormControl('1', [ Validators.required ]) // todo - get current user id from dropdown with existing users
    }
  );

  submitForm(){
    const formValue = this.postForm.value as any as IPostCreateDto;
    this.savePost.emit(formValue);
  }
}
