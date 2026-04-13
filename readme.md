![uofg.webr.ing](banner.webp)

# uofg.webr.ing

> 🎓 webring for students/alumni of [UofG](https://www.gla.ac.uk/)!

## How can I join?

feel free to add yourself to the webring by adding a new entry to [websites.json](websites.json). the only required information is your site's URL and your desired slug.

make sure you send me an email @ [uofg@newty.dev](mailto:uofg@newty.dev) either from your uni email, or with proof of your current/previous enrollment and a link to your PR and I'll get back to you as soon as possible.

before making a PR, add the webring HTML somewhere on your website, like the footer or sidebar. remember to replace `YOUR_SLUG` with your actual slug. if you want to design your own buttons and make it fancy, feel free - just make sure there are links somewhere on your site.

```html
<a href="https://uofg.webr.ing/YOUR_SLUG/previous">&larr;</a>
<a href="https://uofg.webr.ing/">UofG webring</a>
<a href="https://uofg.webr.ing/YOUR_SLUG/next">&rarr;</a>
```

### websites.json schema

only **url** and **slug** are required, and not all information is displayed on the website, but this could change in the future so feel free to fill in the rest if you'd like!

```json
{
  "name": "Your Name",
  "slug": "your-slug",
  "about": "A bit of information about you.",
  "url": "https://your-website.com",
  "rss": "https://your-website.com/rss.xml",
  "owner": "you@your-website.com"
}
```