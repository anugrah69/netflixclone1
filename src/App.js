// import logo from './logo.svg';
import './App.css';
import {requests} from './requests'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import RowPoster from './components/RowPoster';
import Foot from './components/Foot';

function App() {
  return (
    <div >
      <Navbar/>
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
      <Row title="TopRated" fetchurl={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchurl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchurl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchurl={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchurl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
      <RowPoster title="Trending" fetchurl={requests.fetchTrending}/>
      <Foot/>
    
    </div>
  );
}

export default App;
