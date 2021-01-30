# leonardoalves.dev
My personal website & blog

![CI Finance status badge](https://github.com/leunardo/leunardo.github.io/workflows/CI%20Finance/badge.svg)

## Site
[leonardoalves.dev](https://leonardoalves.dev)

## Blog
[blog.leonardoalves.dev](https://blog.leonardoalves.dev)

## Finance
[finance.leonardoalves.dev](https://finance.leonardoalves.dev)


## Tech stack

The architecture is very modern and simple, made with micro-frontends in mind. I have used [LitElement](https://lit-element.polymer-project.org/) which is a javascript framework to create fast and lightweight [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). The language used is typescript and everything is bundled together using handcrafted [webpack](https://webpack.js.org/) files aiming small bundles and more customization.

For Finance I used Angular PWA.

## Cloud Environment

Both sites are hosted within firebase. App & Blog uses Firebase Hosting. Blog also uses Firestore to store posts and Firebase Storage for posts' images.

## Run & Deploy

### Site

- hot reload: `./modules/site $ npm start`
- build: `./ $ npm run build:site`

### Blog

- hot reload: `./modules/blog $ npm start`
- build: `./ $ npm run build:blog`

### Finance
- hot reload: `./modules/finance $ npm start`


## Contributing

Actually I doubt someone wanting to PR this repository because it's my personal work, although if you was curious about how I built it and know something I can improve and want to help, just drop me a PR or email me at leo@leonardoalves.dev. I will be very glad to know someone is reading this 😋. Thanks.

## License
[MIT](https://choosealicense.com/licenses/mit/)