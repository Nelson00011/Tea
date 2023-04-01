# Tea Time (Mad Hatter Projects)
Tea is meant for non IDE projects that can be done directly on the windows machine


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
> npm create-react-app <App Name Here>
```
(for windows ensure git is properly loaded.)
- confirm that package.json is loaded & package.json is completed (resources):
```
> npm init
```




### Front-End Helpful Hints (for Node.js environment)

- Initial pack.json & install dependencies (port: 3000):
```
> npx create-react-app <project name>
```
- Test front-end once pages are generated:
```
> npm run start
```

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
- Common Concerns:
-> For Windows Devices that confirm the following is installed: git, node.js, npm. 
- (Windows Node Install)[https://www.knowledgehut.com/blog/web-development/installation-of-react-on-windows]