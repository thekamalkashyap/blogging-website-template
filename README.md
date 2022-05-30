# Progressive web app for Blogging

![](https://github.com/thekamalkashyap/blogging-website-template/blob/main/public/static/screenshots/gif.gif)

This is a [Next.js](https://nextjs.org/) blogging site bootstrapped from [Timlrx's](https://github.com/timlrx) web [template](https://github.com/timlrx/tailwind-nextjs-starter-blog)

# Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/thekamalkashyap/blogging-website-template)

## Features

- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- Mobile-friendly view
- Works offline
- Can install it as native app
- Custom install button for pwa
- Have top progress bar
- Light and dark theme
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- Support for nested routing of blog posts
- SEO friendly with RSS feed, sitemaps and more!

## Quick Start Guide

1. Downlod using git clone
2. Personalize `siteMetadata.js` (site related information)
3. Personalize `authors/default.md` (main author)
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts
7. Deploy on Vercel

## Development

First, run the development server:

```bash
npm start
```

    or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
