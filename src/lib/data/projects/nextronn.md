---
title: 'Nextronn'
publishedAt: '2022-02-10'
description: 'Nextronn is a CS:GO community portal with big ambitions and a goal to grow.'
preview: 'https://nextronn.eu/'
stack:
  [
    'React',
    'Next.js',
    'PWA',
    'Tailwind CSS',
    'GraphQL',
    'Node.js',
    'NestJS',
    'TypeORM',
    'MySQL',
    'Socket.io',
    'TypeScript'
  ]
---

Nextronn is a [CS:GO](https://blog.counter-strike.net) community portal with big ambitions and a goal to grow.

## Design

Whole website design was made by myself (including logo & identity). I decided to use orange as a brand color because it is not much used in the gaming industry so it might be a little bit unique.

![Nextronn logo](/images/projects/nextronn/logo_showcase.svg)

## The website

Frontend is built with [React](https://reactjs.org/) powered by [Next.js](https://nextjs.org/) framework and on backend is [Nest.js](https://nestjs.com/). [GraphQL](https://graphql.org/) is taking care of communication between FE and BE.

Whole page is focused on SEO so an internationalization was needed. Next.js generates various versions of the website based on language (/en, /de, /sk) so people can easily find the website in their own language.

![Nextronn home screen capture](/images/projects/nextronn/home_screen.png)

## Features

Site is based on dynamic content that is taken from the MySQL database.

### Demos

Large amounts of data that are stored on CDN allowing users to download any demo that has been recorded on server.

![Nextronn demos screen capture](/images/projects/nextronn/demos.png)

### Blog

I decided to make my first blog to improve the SEO of the web. Once a month there is a new article related to gaming.

![Nextronn blog screen capture](/images/projects/nextronn/blog.png)

### Content Management Systems

I built my own CMS that allows users to apply for specific roles in our team. This application is sent to the admin panel where all administrators can see that application and can react to it. The final verdict has the **head admin** who decides if the application has passed or not.

![Nextronn apply form screen capture](/images/projects/nextronn/apply_form.png)

This is a showcase how admin panel looks like

![Nextronn admin panel screen capture](/images/projects/nextronn/admin_panel.png)

### Progressive Web App

I added a PWA functionality for users to make them easily access to the app through desktop/mobile.

### User Profile

User profile is allowing users to search for each other and see their statistics such as activity, their linked profiles _(Youtube, Discord, Steam)_, their chat history etc. THey can also customize their profile. They can add custom bio or background. This helps to connect the community and differentiate themselves from others. I can't forget that each user has its own HTML page that is based on [Incremental Static Regeneration](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration) that improves the SEO.

![Nextronn user profile screen capture](/images/projects/nextronn/aduser_profilein_panel.png)
