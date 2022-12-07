Author: 

    name: Lucas Marthins de Araujo
    
    email: marthins.1570@gmail.com

# Flash.Blog


This is a [NextJS](https://nextjs.org) JAMstack web blog I made as practice of a few technologies I studied. 

## The technologies used on it are: 

**[NextJS](https://nextjs.org)**
**[TailwindCSS](https://tailwindcss.com)**
**[FaunaDB](https://fauna.com)**
**[Stripe](https://stripe.com/)**
**[Prismic CMS](https://prismic.io)**

*The theme was developed to be used only in desktop devices.*

## Steps to start the project: 

1. Install dependencies: 

```
yarn
```
or
```
npm install
```

2. Start node server:

```
yarn dev
```
or 
```
npm run dev
```

3. Start stripe webhooks:

```
./stripe.exe listen --forward-to localhost:3000/api/webhooks
```

*PS: You need to login and updated global variables to use [stripe webhooks](https://stripe.com/docs/webhooks/quickstart) correctly.*

Prismic and FaunaDB connections are serverless so there's no need to start anything.


