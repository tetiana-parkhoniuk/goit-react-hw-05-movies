import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import HomeView from 'views/HomeView/HomeView';
import MoviesView from 'views/MoviesView';
import NotFoundView from 'views/NotFoundView/NotFoundView';

import './App.css';

export default function App() {
  return (
    <Container>
      
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies">
          <MoviesView /> 
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      
    </Container>

  );
}

