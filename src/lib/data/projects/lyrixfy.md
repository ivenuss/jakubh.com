---
title: 'Lyrixfy'
publishedAt: '2022-09-22'
description: 'Tool for bringing the meaning of lyrics 🎶'
preview: 'https://lyrixfy.vercel.app/'
owner: 'ivenuss'
repo: 'lyrixfy'
stack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'PWA', 'tRPC']
---

## Design

Application UI is minimal, clean and intuitive which was one of my goals to achieve. Logo and UI was designed by myself. Application supports dark mode and light mode.

## Technologies

One of the major new technologies I used was [tRPC](https://trpc.io/).

### tRPC

tRPC is a typesafe solution for building APIs with [Next.js](https://nextjs.org/). After setting up the boilerplate with [React Query](https://tanstack.com/query/) you just create **queries** or **mutations** in different files, depending on the procedures which these functions are assigned to.

```ts
const { data } = trpc.spotify.getTrack.useQuery({ trackId: id });
```

## Features

### Quality over quantity

App lets users configure their image card in so many ways, but still keeps it simple, so users don't get lost in the amount of things to customize.

They can change the size of the content inside the card, card dimensions, layout they want to use or even theme colors. If this is still not enough they can upload their own background image.

![Tux, the Linux mascot](/images/projects/lyrixfy/blinding_lights_maybe.png)

### Intuitive search navigation

![Lyrixfy searchbar](/images/projects/lyrixfy/searchbar.png)

### Export functions

Users can share their image via [`Navigator.share()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) API. They can copy it to clipboard or even download in the file format they prefer.

### Keyboard shortcuts

Application supports an array of shortcuts to make the user experience as user friendly as possible.

### Server side rendering

Search engine optimalization (SEO) was one of the keys. So users can share links to their favorite songs across the social media with embedded preview. That's when SSR comes handy on it pre-renders song data and adds them to meta tags on render.

### Preview

Home screen

![Lyrixfy home screen](/images/projects/lyrixfy/showcase.png)

Lines selection

![Lyrixfy lines selection](/images/projects/lyrixfy/lines_selection.png)

Configurator page

![Lyrixfy site preview capture](/images/projects/lyrixfy/configurator.png)
