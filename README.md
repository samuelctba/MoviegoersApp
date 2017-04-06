## Setup

Requirements to use this project:

##### Node.js (https://nodejs.org/download/)

##### npm (Node Package Manager, it comes with node.js installation)
In case you're not with the latest version of npm:
```sh
$ sudo npm install npm -g
```

##### Cordova & Ionic Cli
To install both of them on your system just launch this command:
```sh
$ sudo npm install cordova ionic -g
```

## Install NPM Dependencies
Once you clone this repository, run this command on your terminal to install all needed dependencies(node_modules):
```sh
$ npm install
```

## Install cordova plugin Dependencies
Run this command on your terminal to install all needed plugins:
```sh
$ cordova prepare
```

## Launching the App
After installing the needed dependencies you are done, launch your app based on platform:

#### Can be used on Android or iOS

### Android

```bash
    $ ionic platform add android
    $ ionic build android --prod
    $ ionic run android --prod
```

### iOS
```bash
    $ ionic platform add ios
    $ ionic build ios --prod
```    
    Run using XCode

### Browser
```sh
$ ionic serve
```


## ScreenShots

* From Google Chrome
  
  <img src="screenshots/img1.png" width="250"/>
  <img src="screenshots/img2.png" width="250"/>

## Libraries
There is no third-party libraries used on this project. All of them can be found either on Ionic 2, AngularJs 2 or Cordova.
