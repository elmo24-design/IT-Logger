import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

//Components
import SearchBar from './components/layout/SearchBar';
//Logs
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
//Techs
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
//Provider
import {Provider} from 'react-redux'; //To connect redux to react
import store from './store';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  })

  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
}

export default App;
