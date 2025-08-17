import { Component } from '@angular/core';

@Component({
  selector: 'app-lorem-ipsum-cards',
  imports: [],
  templateUrl: './lorem-ipsum-cards.component.html',
  styleUrl: './lorem-ipsum-cards.component.scss'
})
export class LoremIpsumCardsComponent {

   cardData = [
    {
      title: 'Lorem P',
      icon: 'assets/icons/server.svg',
      serverType: 'Server',
      serverSubtype: 'Server',
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
      details: 'Lorem Ipsum Dolor Sit Amet Consectetur. Nunc Vitae Tortor Convallis Vitae Arcu. Magna.',
      isExpanded: false // Track expansion state
    },
    {
      title: 'Lorem S',
      icon: 'assets/icons/server.svg',
      serverType: 'Server',
      serverSubtype: 'Server',
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
      details: 'Lorem Ipsum Dolor Sit Amet Consectetur. Quis Viverra Etiam Pellentesque Lectus Semper In Massa Purus. Auctor Aenean Aenean Senectus Massa Dignissim Vehicula Mi Erat Purus. Praesent Scelerisque Aliquet Metus Sagittis Dictum Sed Sed. Sed Venenatis Sed Urna Quam.',
      isExpanded: false
    },
    {
      title: 'Lorem T',
      icon: 'assets/icons/server.svg',
      serverType: 'Server',
      serverSubtype: 'Server',
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
      details: 'Lorem Ipsum Dolor Sit Amet Consectetur. In Laoreet Elementum Luctus Odio. Id Enim Urna.',
      isExpanded: false
    }
  ];

  toggleCard(index: number): void {
    this.cardData[index].isExpanded = !this.cardData[index].isExpanded;
  }
}
