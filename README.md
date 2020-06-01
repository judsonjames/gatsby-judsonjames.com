# Judson James Professional Portfolio
### Built with Gatsby, powered by Contentful, GetForm, and Netlify

This website is to serve as my professional portfolio, including my previous work, an about section, a blog powered by [Contentful](https://www.contentful.com/), and a contact form powered by [GetForm](https://getform.io/). The site itself is hosted with [Netlify](https://www.netlify.com/).

This Gatsby site was built from a base template and built to scale
```
https://github.com/tdharmon/gatsby-starter-typescript-sass
```

### How to run the dev environment locally
```
git clone https://github.com/judsonjames/gatsby-judsonjames.com
cd gatsby-judsonjames.com
yarn # or npm install
yarn start # or npm run start
```
You will have to create your own `.env.development` and `.env.production` files and supply your own GA Tracking, Contentful, and GetForm links, but this site is completely modular and repurposable. Feel free to borrow from this repository if you find something that helps.

### How to run an example of this in Production
Netlify has integrated CI/CD, so whenever you push to your designated branch it will update your Netlify instance.

If you choose to go without Netlify, you can still run this in production with any CDN.

### Caveats
For whatever reason, I was never able to get `sharp` and `manifest` to work in WSL, so if you're running that, you will likely need to run yarn/npm through PowerShell. It's the only way I was able to run it in Windows. MacOS and Linux seem to have no issues.

### Using this site for your own purposes
I specifically made this site with microservices so that others could borrow the React components and Gatsby formatting and build their
own portfolios without worrying about building a full-backend. IE give this to a non-technical person with their own service accounts and be good to go with minimal changes.

Feel free to contact me if you'd like clarifications on design choices. 
