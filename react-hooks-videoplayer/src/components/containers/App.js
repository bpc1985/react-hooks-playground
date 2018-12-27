import React from 'react';
import MyVideoPlayer from './MyVideoPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MyVideoPlayer} />
        <Route exact path="/:activeVideoId" component={MyVideoPlayer} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  </BrowserRouter>
);

export default App;