<p align="center">
 ## React Native for WEB, Android &amp; iOS
</br>

## React Native Example for WEB, Android &amp; iOS

You can use this app on both iOS,WEB and Android.

## About

This is a simple react native multiplatform sample
</br>
## Documentation
1- Copy webpack.config.js, App.web , index.web.js ,index.html files to your app folder
</br>
2 -Run this commands via terminal: 
</br>
   a-  cd music ( or your app folders name )
   </br>
   b-  npm install react-native-web
   </br>
   c-  npm install -D babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack
   </br>
 4-  Copy paste this scripts to package.json :  ,
 </br>
    "build": "rm -rf dist/ && webpack --mode=production --config webpack.config.js",
    </br>
    
    "web": "webpack serve --mode=development --config webpack.config.js"
 </br>
</p>
