import React, {Component} from 'react';
// import {Platform, StyleSheet} from 'react-native';
import LoginView from './src/LoginView';
import HomeView from './src/LoginView';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={ LoginView } hideNavBAr />
    <Scene key="home" component={ HomeView } hideNavBAr />
  </Scene>
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Router scenes={scenes} />
  }
}
