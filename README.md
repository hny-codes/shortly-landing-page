# Shortly Landing Page

A landing page for Shortly, where you can shorten your links/URLs with ease.

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![](/public/screenshot/screenshot.png)

## Table of Contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Built with](#built-with)
- [Useful resources](#useful-resources)

## Overview

The purpose of this challenge is to build a static landing page and replicate the given style sheet as close as possible. This project is built using [Astro](https://astro.build/).

Shortened links are created utilizing the [Shrtcode API](https://shrtco.de/). Requests are made via the built-in fetch API.

```ts
const API_BASE = 'https://api.shrtco.de/v2/';

...

export default async function getShortenLink(link: string) {
  const request: Promise<API_RESPONSE> = (await fetch(`${API_BASE}shorten?url=${link}`)).json();
  return request;
}

```

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the form is submitted if:
  - The input field is empty

## Built with

- Typescript
  - Fetch API
- Tailwind CSS
- React
- Astro
- Cypress
- [React Hook Form](https://react-hook-form.com)
- [Shrtcode Link Shortener](https://shrtco.de/)

## Useful Resources

- [Astro Documentation](https://docs.astro.build/)
- [Cypress Documentation](https://docs.cypress.io/api/table-of-contents)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
- [Shrtcode Documentation](https://shrtco.de/docs)
