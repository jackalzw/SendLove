# SendLove

Send someone a surprise they have to earn. You pick the occasion, write a message and add some pictures. You get a link to send them. When they open it, they slide the tiles of a puzzle to rebuild the first picture, and once it's whole, your message and pictures appear.

## How it works

1. Pick an occasion: birthday, welcome back, sorry, thank you, congratulations or just because. Each one has its own colors and greeting.
2. Type their name and your message, add up to 8 pictures (the first becomes the puzzle) and choose a difficulty.
3. Get a ready link like `https://YOUR-SITE.netlify.app/p/abc123` and send it however you like.

## Features

- No accounts or sign-ups for the people using it
- Three difficulty levels: 3x3, 4x4 and 5x5, with extra empty spaces to slide into
- Works on phones and desktops
- Creators can delete their own puzzles, which stops the link working
- Pictures are resized in the browser before they are saved

## Built with

Plain HTML, CSS and JavaScript, plus Netlify Functions and Netlify Blobs for saving puzzles. There is no database to set up.

Powered by Pardon Chida.

## Deploy (one time)

Needs Node.js installed.

    npm install
    npm install -g netlify-cli
    netlify login
    netlify deploy --prod

When asked, create a new site. The URL it prints is your SendLove app.
Do not use drag-and-drop for this project, because the functions need their
dependency installed.

You can also push this folder to GitHub and connect the repo in Netlify.

## Try it locally

    netlify dev

## Notes

- Anyone with your site link can create puzzles, and the photos are stored in
  your Netlify account. Add a privacy note before sharing it widely.
- Each puzzle has a secret delete token. The creator's browser keeps it, so they
  can delete from the "Your puzzles on this device" list.
- You can also delete puzzles from the Blobs section of your Netlify dashboard.
- There is no spam protection yet. If strangers start using it, add rate
  limiting or a captcha, and watch your Netlify usage.
