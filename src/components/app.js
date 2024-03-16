import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './home';
import ViewDetails from './viewDetails';
import MoreAboutMe from './moreAboutMe';

function App() {
  const font =  "'Open Sans', sans-serif";
  const theme = createMuiTheme({
    typography: {
      fontFamily: font,
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
          path={['/my-work', '/contact-us']} // Set an array of paths
          component={Home} // Component to render for these paths
      />
          <Route path="/view-details/:id" component={ViewDetails} />
          <Route path="/more-about-me" component={MoreAboutMe} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
