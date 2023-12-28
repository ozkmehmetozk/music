import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(expo.appName, () => App);
AppRegistry.runApplication(expo.appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});