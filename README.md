# Art @ Home
<img width="100%" alt="Schermafbeelding 2022-03-08 144013" src="https://user-images.githubusercontent.com/74137185/157249410-7e098815-1f1e-48b4-8a09-6ca8c40cb6d5.png">

## Table of Contents

-   [About](#about)
-   [Live demo](#live-demo)
-   [Server side rendering](#server-side-rendering)
-   [User story](#user-story)
-   [Activity diagram](#activity-diagram)
-   [API](#api)
-   [Critical render path](#critical-render-path)
-   [How to install](#how-to-install)
-   [Wishlist](#wishlist)
-   [Any issues?](#any-issues)
-   [License](#license)

## About
Welcome to this repository. Here you can find my art app called **Art @ Home**. The concept is that the user can view art from the Rijksmuseum on their device. The user can look for their favourite artist and then the app will load in 5 paintings of that artist. If you click on the image, the user will arrive on the detail page, where they can view their favourite piece of art.

## Live demo
Follow this link to check out the full app!
[Art @ Home app](https://pwa-aron.herokuapp.com/)

## Server side rendering
I'm using server side rendering for this project. Server side rendering is the ability of an application to convert dynamic HTML files on the server into a fully rendered HTML page for the client. Because of server side rendering, the pages load faster, which improves the user experience. It also helps in efficiently loadinging web pages for users with slow connections to outdated devices. Also, server side rendering is good for SEO. Important content elements can be inspected directly without the pages having to render first.

## User story
>As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown. Despite of slow internet connection at home, I still want to be able to look at the paintings without waiting too long.

## Activity diagram
### Server

### Sevice worker

### Client
<img width="100%" alt="Schermafbeelding 2022-03-08 144013" src="https://user-images.githubusercontent.com/74137185/162426048-261e4b46-3365-4343-9235-e62391c510bb.jpg">

## API
For this project, I'm using the Rijksdata API. To start using the data, you need to obtain an API key by registering for a [Rijksstudio account](https://www.rijksmuseum.nl/nl/registreer?redirectUrl=https://www.rijksmuseum.nl). You will be given a key instantly upon request, which you can find at the advanced settings of your Rijksstudio account. Some of the data elements that you can use from the API are the ```webImage``` to obtain the image, ```title``` for a short description, ```longTitle``` for a long description, ```principalOrFirstMaker``` for the name of the artist and ```id```, for the id of the painting.    

## Critical render path

## How to install
### Clone this repo
```
$ git clone https://github.com/AronPelgrim/progressive-web-apps-2122.git
```

### Navigate to the repo
```
$ cd progressive-web-apps-2122
```

### Install necessary packages
``` 
$ npm install
```

### Start server
 ``` 
$ npm start 
 ```
Check it out! The server runs on localhost:3000.

## Wishlist
- [ ] A good error page.
- [ ] Meer doen met de serviceworker.
- [ ] Goede vergelijking met de WAFS app, qua snelheid.
- [ ] Beter maken Critical Rendering Path.
- [ ] Activity digram verduidelijken en aanvullen.

## Any issues?
You can create an issue in this repository to let me know what's wrong.

 ## License
[MIT](https://github.com/AronPelgrim/progressive-web-apps-2122/blob/main/LICENSE)