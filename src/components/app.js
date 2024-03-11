import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './home';
import ViewDetails from './viewDetails';
import MoreAboutMe from './moreAboutMe';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/view-details/:id" component={ViewDetails} />
        <Route path="/more-about-me" component={MoreAboutMe} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
