import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() => 
  import('./views/MoviesView.js' /* webpackChunkName: "movies-view" */),
);
const NotFoundView = lazy(() => 
  import('./views/NotFoundView/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
);
const MovieDetailsView = lazy(() => 
  import('./views/MovieDetailsView/MovieDetailsView.js' /* webpackChunkName: "movie-details-view" */),
);


export default function App() {
  return (
    <Container>
      
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView /> 
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>


      
    </Container>

  );
}

