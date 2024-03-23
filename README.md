<h1 align="center">Tea Time (Mad Hatter)</h1>

![itemfromScreenShot]

## Summary (Continue...[here](https://marketplace.visualstudio.com/items?itemName=Continue.continue))
- What project did you work on and why?
    - I decided to work on BookNook application with tea Api that allows for the ability to review NY Times reviewed books and choose your corresponding Tea Time beverage to go along with it. The end objective is very far from the current state. It is intended for the ability to look at NY Times recommended books based on current today's list, in addition this will expand into a books page that will allow a larger list and more details on the books becoming available. The Tea API should pull to provide a list of tea's as well that can be explored further in the tea page, that allows you to eventually pair the tea by the mood or genre of the book you are reading. 
- What did you do manually (without Continue)?
    - I did most of the application manually, everytime I tried to get the Continue to do a componenet it gave vague general advice, so maybe it requires more input code to generate additional code on to of that. Some of the resources were comical, or helpful in passing, however they were not lines of code that I could copy and paste in or use? 
- What did you try to use Continue to do?
    - I tried to use Continue for multiple components and smaller piece, I even tried having it set up an API call, just to see if it could? 
- What worked and what didn’t work with Continue?
    - I may be missing the intended application for the Continue.  It seems like a nice Visual Studio Code add up, however it at times appears to make coding last longer than shorter. Either way I will probably continue to use it in passing for various projects, it was faster than a google search for the information, but not more detailed than the initial AI from google search, lacking the additional web sources. 
- What problems do you see with Continue?
    - What input is acceptable or passable. Meaning what is the method for requesting information and getting the desired result. An example is  "New Scrubs" -> result being "Nurse Scrubs" vs "Foot Scrubs" vs "Bath Scrubs for cleaning" are all very different answer, but may lead to the incorrect funneling of results. 
- What ideas do you have about improving Continue?
    - Have the ability to link to further results outside visual studio code. Some of the responses did not make the most sense, see below:

Examples of Continue:
```
This API call will retrieve a list of books from the server's database. The response will typically include information such as the book title, author, genre, and a brief description. Depending on the API, additional information such as the book's ISBN, publication date, and cover image may also be included. The response will usually be in JSON or XML format and can be used to display the book list in a web or mobile application.
```

```
If the item in question is a small electronic device, a possible smaller component to encompass it could be a protective case or sleeve. This component would be designed to fit snugly around the device, providing protection from scratches, dust, and minor impacts. It could be made from a durable material such as silicone or neoprene, and may feature cutouts or openings to allow access to buttons, ports, and other features of the device. The protective case or sleeve would serve as a practical and stylish way to keep the item safe and secure while not in use.
```

- Issues with API call for NY TIMES running functionally

![image](https://github.com/Nelson00011/Nelson00011/assets/112737682/278fb2e1-b1b5-4fc3-9c43-2b90d0574980)

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
- API for Books NY TIMES [here](https://developer.nytimes.com/apis)
<!-- oMuH08YkqAXur4DvTNv2reDXeQJVag17 -->
<!-- SECRET
qLs3VIOe533f6iVc -->
- API for Etsy [here](https://www.etsy.com/developers/documentation/getting_started/api_basics) 
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
- NavBar
- Main Page 
-- Carousel with books
-- Tea Types should be with Descriptions (similar to items to purchased)
-- Coffee Types for Warm Beverages? 
-- Picture of Coffee (Stagnant, interactive, or Leads to Book Library)

- Tea
-- Consider Finding a Coffee Shop Nearby that Matches the book you want to read? 
-- Consider Google Maps to Favorite, TEA SHOPS where you can READ BOOKS! 


Future Design: 
- Include Font from Google Fonts - Alice in Wonderland Themed - Tea Time is Book Time, how do you choose to mark your chapters? With a pen or with tea stains? 
- API:
    - Tea -  Carousel of Tea Images, Fun Fact Modules, Tea Filter by Region link to book? 
    - BookList - Include best Cozy Book recommendations and filtering settings, Quote selected from book can be listed 
    - Inspirational Quotes - Design Pinterest element in a Quote page for liking/hearting interested information
- Design: 
    - Include Material UI Features
    - Cohesive Color Themes that are more Black, White, and Blue or Neutral Color (see prior sights - Boho Bags and the Edit Comments)

ADD PHOTO FOR STATIC FRONT PAGE FROM GERMAN SITE! 
-->