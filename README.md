# Tea Time (Mad Hatter Projects)
Tea is meant for non IDE projects that can be done directly on the windows machine, focus on REACT applications & projects outside of Ubuntu. 


## Description
- Description to be filled in 

## Demo Youtube Video
- 
## Screen Shots
- Screen shots here

## Technology stack
Node.js, REACT.js, Express.js, etc...

## Run Code (Environment)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
```

-  Establish React App
```
> npx create-react-app <App Name Here>
> cd  <App Name Here>
> npm start
```




### Front-End Helpful Hints (for Node.js environment)

- Establish react project, move into folder (cd), confirm front-end generated:
```
> npx create-react-app <project name>
> cd <project name>
> npm run start
```
- Navigate to localhost:3000 to confirm environment established & confirm the below appears:
![REACTsqr](https://user-images.githubusercontent.com/112737682/229308612-826c64ef-dd92-4f78-a450-8531a8a0a542.jpg)

#####Changes to the package.json starts

- If bootstraps is desired (see resources):
```
> npm install react-bootstrap bootstrap
```
- Establish router on front end (required for NavBar): 
```
> npm install --save react-router-dom
```
> Required imports for App.js:
```
import { BrowserRouter, Routes, Route } from "react-router-dom";
```
> Required imports for NavBar.js:
```
import { Link } from 'react-router-dom';
```
---- TODO HERE ()


### Back-End Helpful Hints (for Node.js environment)

- Install express:
```
> npm install express
> npm express -v
> npm list express
```
- To avoid using babble the package.json must have "type": module, added below "main": "index.js",

--------------------------------------------------
## Connecting Ends
- Install axios library:
 ```
> npm install axios
> npm axios --version
```
- Add a proxy to the package.json file (8080 AWS-linux, 8000 Mac-OS)
- In package.json add "proxy": <localhost:id>
- There is also the ability to install a cors dependencies:
 ```
> npm install cors
> npm cors --version
```


--------------------------------------------------
### Additional Resources:
- Common Concerns
-> For Windows Devices that confirm the following is installed: git, node.js, npm. 
- [Windows Node Install](https://www.knowledgehut.com/blog/web-development/installation-of-react-on-windows)
- [BootStraps Documentation](https://getbootstrap.com/)
