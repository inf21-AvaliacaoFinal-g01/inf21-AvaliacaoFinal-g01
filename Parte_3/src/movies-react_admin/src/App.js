

import { Admin,  EditGuesser, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";


import {MovieList, MovieEdit} from "./MovieList";
import {ActorList, ActorEdit} from "./ActorList";
import {DirectorList, DirectorEdit} from "./DirectorList";
import {GenreList, GenreEdit} from "./GenreList";
import MoviesIcon from "@material-ui/icons/Movie";
import PersonIcon from "@material-ui/icons/Person";



const dataProvider = lb4Provider("http://localhost:3000");
const App = () => (
 <Admin dataProvider={dataProvider}>
 <Resource name="movies" icon={MoviesIcon} list={MovieList} edit={MovieEdit}/>
 <Resource name="actors" icon={PersonIcon} list={ActorList} edit={ActorEdit}/>
 <Resource name="directors" icon={PersonIcon} list={DirectorList} edit={DirectorEdit} />
 <Resource name="genres" list={GenreList} edit={GenreEdit}/>
 </Admin>
);
export default App;





/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/