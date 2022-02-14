import './App.css';
import { Provider } from 'react-redux';
import NavBar from './components/layout/Navbar';
import Home from './components/home/Home';
import store from './store';
import {getAllMovies, getMoviesCategories} from './actions/searchActions'
function App() {

  store.dispatch(getAllMovies())
  // store.dispatch(getMoviesCategories());
  return (
    <Provider store={store}>
      <div className="App">
      <NavBar/>
      <Home/>
      </div>
    </Provider>
  );
}

export default App;
