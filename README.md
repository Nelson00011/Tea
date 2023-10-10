<h1 align="center">Tea Time (Mad Hatter)</h1>

![itemfromScreenShot]

## Description:
**Tea Time** is an Ecommerce ***React.js*** app that allows users to explore `insert here`:
- Client side (*frontend*) utilizes ***React.js*** & ***react-router-dom*** in combination with Material MUI create themes to provide cohesive structure. 
- Server side (*backend*) uses ***Insert here***

## Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>


## Technology Stack
- **Frontend/Client:** React.js, MUI, Redux HTML5, CSS
- **API:** TBD
- **Backend/Server:** Strapi.js, SQLite, Node.js OR Node.js, Express.js, Postgres.js

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

### Back-End Helpful Hints (Node.js/Strapi - Optional)
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
```
> npx create-strapi-app@latest <project name>
> cd <project name>
> npm install --save stripe
```
- Strapi Database generated (ctrl-c to exit):
```
> npm run develop
```
- **Avoid** *npm run start* and use the `npm run develop`. 
- Allow server to restart with each edit (see resources): 
    - **Content-Type Builder**: Item entry
    - **Media Library**: upload photos
    - **Permissions**: Settings > Roles > Public 
- In frontend fetch `item` from backend (*localhost:1337*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:1337/api/${grouping}`
)
```
--------------------------
### Deployment

## Resources & Helpful Hints:
- [Strapi](https://strapi.io/) Backend Applications
    - Quick Start [here](https://docs.strapi.io/dev-docs/quick-start)
    - Admin Panel of Strapi `http://localhost:1337/admin`
    - Video Help found [here](https://www.youtube.com/watch?v=gB8HRpIAE3o)
    - Rest API [info](https://docs.strapi.io/dev-docs/api/rest)/populate [here](https://docs.strapi.io/dev-docs/api/rest/populate-select) & filter [info](https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication)
    - MUI form information [here](https://mui.com/material-ui/api/form-control/)
    - **helpful hint:** returns null if not defined, check image sizes in formats (*avoid thumbnails*) & `?.` help with unknown. `http://localhost:1337/` must be used, http required for strapi. 

- **PostMan** for API Tests [here](https://www.postman.com/)
    - jsonwebtoken / [jwt](https://jwt.io/) for Authentification & install [here](https://www.npmjs.com/package/jsonwebtoken)
    - jwt Debugger [here](https://jwt.io/#debugger-io)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 


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


-->