# portfolio-and-blog

> Joey Gauthier&#39;s Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/cfe5692f-e688-4f3e-a96d-9ea631808fe9/deploy-status)](https://app.netlify.com/sites/joeyg/deploys)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Notes

I'm in experimental territory, at least for my experience. I've never used Nuxt and I'm trying some new things here. The idea is to eventually have a really basic portfolio (in the past mine have been WAY to complicated for a site that is rarely visited) and add a blog section. The goal for the blog section is to have it setup where I write markdown files, push to master, Netlify's webhook picks it up and auto builds, and the new blog is posted.

Right now a lot of this is garbage code because there is some trial and error happening. I'm just playing around until I iron out some things.

## TODO
- make it look nicer
- iron out architectural issues
- test build with 'npm run generate'
- get up on netlify with webhooks
- see about working in a way to add images to the blog (maybe use a template)
- konami code easter egg trigger works, now think of something fun for it to do
