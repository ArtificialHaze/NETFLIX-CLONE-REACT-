import "./App.css";
import React from "react";
import Row from "./Row";
import { requests } from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import instance from "./axios";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix originals"
        fetchUrl={instance + requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending now" fetchUrl={instance + requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={instance + requests.fetchTopRated} />
      <Row
        title="Action movies"
        fetchUrl={instance + requests.fetchActionMovies}
      />
      <Row
        title="Comedy movies"
        fetchUrl={instance + requests.fetchComedyMovies}
      />
      <Row
        title="Horror movies"
        fetchUrl={instance + requests.fetchHorrorMovies}
      />
      <Row
        title="Romance movies"
        fetchUrl={instance + requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={instance + requests.fetchDocumentaries}
      />
    </div>
  );
};

export default App;
