---
title: 'TomTSkins'
publishedAt: '2021-11-10'
description: 'TomTSkins is an online marketplace for CS:GO Items.'
stack:
  ['React', 'Redux', 'CSS', 'Node.js', 'Express', 'Redis', 'MongoDB', 'Socket.io', 'Javascript']
preview: 'https://tomtskins.net/'
---

TomTSkins is an online marketplace for [CS:GO Items](https://blog.counter-strike.net/). It is a CMS that allows users to list any items and then other users (potential buyers) can request them.

It is closely connected with the [Steam API](https://developer.valvesoftware.com/wiki/Steam_Web_API) that tracks all CS:GO items.

## Design

Design of the website was made by myself. The logo was blue so I used a dark blue background combined with the blue accent.

![TomTSkins preview capture](/images/projects/tomtskins/home_screen.png)

## How does the CMS work?

System is pretty simple. There is a page with an array of CS:GO items that are for sale. Users can add them to cart and then confirm an order.

![TomTSkins home screen capture](/images/projects/tomtskins/skins.png)

The order is processed and sent inside the admin panel where admins can navigate through them and select which one they want to handle. When trade is successfully completed they can mark the order as completed.

![TomTSkins offers screen capture](/images/projects/tomtskins/offers_screen.png)

## Profile

Users can customize their profile and set their own trade link which is associated with [Steam](https://store.steampowered.com/).

![TomTSkins profile page screen capture](/images/projects/tomtskins/profile_page.png)
