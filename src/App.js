import { Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';

import './App.css';

export default function App() {
  return (
    <Container>
      <AppBar />
      
      <Route path="/" exact>
        <HomeView />
      </Route>

      <Route path="/movies">
        <MoviesView /> 
      </Route>

    </Container>

  );
}

