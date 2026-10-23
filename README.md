# SendLove

People pick an occasion, add a name, message and pictures, and get a ready link
(like https://YOUR-SITE.netlify.app/p/abc123). They solve a sliding puzzle to open it.

Everything runs on your own Netlify account:
- `public/` the pages (maker, viewer)
- `netlify/functions/` create, get and delete puzzles
- Puzzles are stored in Netlify Blobs (no database to set up)

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
