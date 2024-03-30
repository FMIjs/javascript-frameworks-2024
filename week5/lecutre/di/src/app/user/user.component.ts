import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() name!: string;
  @ViewChild('#test') viewElement!: ElementRef<HTMLInputElement>;
  @ContentChild('#test') contentElement!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log(this.name);
  }

  ngOnInit() {
    // we have access to all inputs
  }

  ngAfterContentInit() {
    // we have access to the content of the component (the elements between the opening an closing tags of our component)
    console.log(this.contentElement);
  }

  ngAfterViewInit() {
    // we have access to the view of the component
    console.log(this.viewElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['name'].currentValue);
    // called every time we have a change on any of the inputs
  }

  ngDoCheck() {
    // called on CD cycle
  }

  ngOnDestroy() {
    // when our cmp will be destroyed (removed from the parent view)
  }
}
