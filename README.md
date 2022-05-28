# jakubh.com

![banner](https://i.imgur.com/MIpPTuB.png)

## Design

The main goal for me was to make the design as minimalistic as possible, which I think I achieved.

The layout was inspired by [Lee Rob](https://leerob.io/). I wanted to make a theme switcher so the website is available in two themes (Light & Dark).

## Technologies

Frontend is built with Next.js and backend is built on Next.js [serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions). For the database I'm using [Supabase](https://supabase.com) which is a kind of [Firebase](https://firebase.google.com) alternative. Database is primarily used as a storage of all image paths. It is hosted on [Vercel](https://vercel.com/).

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Supabase](https://supabase.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Features

### Projects

Project section is built on [Contentlayer](https://www.contentlayer.dev/) which is a really cool tool for transferring pure MDX to JSON.

### Contact

Contact form sends a HTTP request to API endpoint and thanks to [Nodemailer](https://nodemailer.com) I am able to convert this message to an email.
