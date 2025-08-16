import { Component } from '@angular/core';

@Component({
  selector: 'app-lorem-ipsum',
  imports: [],
  templateUrl: './lorem-ipsum.component.html',
  styleUrl: './lorem-ipsum.component.scss',
})
export class LoremIpsumComponent {
  dataItems = [
    { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
    { label: 'Lorem Ipsum Dolor', value: 'Ut' },
    { label: 'Lorem Ipsum Dolor', value: 'Eros' },
    { label: 'Lorem Ipsum Dolor', value: 'Yes', hasCheck: true },
    { label: 'Lorem Ipsum Dolor', value: 'Sit' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
  ];
}
