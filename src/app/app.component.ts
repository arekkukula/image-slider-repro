import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  imagesArray: Array<object> = [
    {
      image: "./assets/google-image1.jpg",
      thumbImage: "./assets/google-image1.jpg"
    },
    {
      image: './assets/google-image2.jpg',
      thumbImage: './assets/google-image2.jpg'
    }
  ];

  /*
    This function simplifies the problem a bit, however it might fetch images' URLs from a database,
    and that's where my application started to behave in unexpected manner - it showed thumbImages fine,
    but couldn't maximize (popup) clicked images + it didn't give any response in form of console errors.
  */
  imagesFunction(): Array<object> {
    return [
      {
        image: "./assets/google-image1.jpg",
        thumbImage: "./assets/google-image1.jpg"
      },
      {
        image: './assets/google-image2.jpg',
        thumbImage: './assets/google-image2.jpg'
      }
    ];
  }
}
