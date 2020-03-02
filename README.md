# Info

Minimalistic reproduction of an issue in Angular specific 3rd party library
[ng-image-slider](https://github.com/sanjayV/ng-image-slider).

The case is that binding `images` property of `ng-image-slider` component to a function,
instead of a static array, breaks the behaviour of maximizing the images upon clicking them.
