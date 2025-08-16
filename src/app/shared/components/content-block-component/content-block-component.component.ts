import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-block-component',
  imports: [],
  templateUrl: './content-block-component.component.html',
  styleUrl: './content-block-component.component.scss',
})
export class ContentBlockComponentComponent {
  @Input() title!: string;
  @Input() description!: string;
}
