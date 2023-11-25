<h1 align="center">Tea Time (Mad Hatter)</h1>

![itemfromScreenShot]

## Description:
**Tea Time** is an Tea Drinker, Book Reader, Rain lover & Bohemian Chic ***React.js*** app that allows users to explore `insert here`:
- Client side (*frontend*) utilizes ***React.js*** & ***react-router-dom*** in combination with Material MUI create themes to provide cohesive structure. 
- Server side (*backend*) uses ***Insert here***
- Grab your favorite top hat and login to search for good reads and that perfect cup of tea. Either select a cup of tea and a book to go with it or find a side of tea to go with your favoite book? 
- Store your "Favorite Books" in "Postgres Database"/MongoDB?

## Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>


## Technology Stack
- **Frontend/Client:** React.js, MUI, Redux HTML5, CSS
- **API:** TBD (see references)
- **Backend/Server:** Node.js, Express.js, Postgres.js

## Run Code (Environment)

### Front-End Helpful Hints 
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```
- Initial React application (localhost:3000):
```
> npx create-react-app <project name>
> cd <project name>
```
- Initial package.json & install dependenies:
    - Must be `cd`'d into frontend/client to add depedencies
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
    
```
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install formik yup dotenv react-responsive-carousel
> npm install --save @stripe/react-stripe-js @stripe/stripe-js
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Hints (Node.js)
#### Postgres/MongoDB?, Express.js
- Make Postgres Server & install dependencies (see resources):
```
> mkdir <server name>
> cd <server name>
> npm init
> npm install pg cors express
> npm install nodemon
```

--------------------------
### Deployment

## Resources:
- API for Tea Types [here](https://boonakitea.cyclic.app/)
- API for Etsy [here](https://www.etsy.com/developers/documentation/getting_started/api_basics) 
    - 
- API for Google Books [here](https://developers.google.com/books/docs/overview)
- **PostMan** for API Tests [here](https://www.postman.com/)


#### **style:** 
- **[Material UI CORE](https://mui.com/)** React UI LIBRARY *great for standardizing projects*
    - MUI Core installation [here](https://www.npmjs.com/package/@mui/material) & [here](https://mui.com/material-ui/getting-started/installation/)
    - MUI template pages [here](https://mui.com/material-ui/getting-started/templates/)
    - MUI Theme [here](https://mui.com/material-ui/customization/theming/)
    - React Box [here](https://mui.com/material-ui/react-box/) & Grid [here](https://mui.com/material-ui/react-grid/)
    - Material Icon Info & Import links [here](https://mui.com/material-ui/material-icons/)
    ```
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    ```
    - MUI Palette [here](https://mui.com/material-ui/customization/palette/)
    - MUI Alert [here](https://mui.com/material-ui/react-alert/)
    - MUI with CSS Modules style library [here](https://mui.com/material-ui/guides/interoperability/)
    - Additional fun in grid-template-columns [here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
    - MUI react-tab [here](https://mui.com/material-ui/react-tabs/) (*avoid scrolling option*)
- [React](https://react.dev/) components
    - React responsive [Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)

#### **helpful hint:** 
- console log testing with `ctr-alt-l` 
- when a Promise is returned as 'fufilled' use await to get actual item.
- CSS styles: clamp [here](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- Always Stay Positive & Triple Check Permissions :)


<!-- 
### TODO stx: 
Future Structure (stx):
- Include Font from Google Fonts - Alice in Wonderland Themed - Tea Time is Book Time, how do you choose to mark your chapters? With a pen or with tea stains? 
- API:
    - Tea
    - BookList or QUOTES
    - Cozy Furniture
    - Inspirational Quotes


-->