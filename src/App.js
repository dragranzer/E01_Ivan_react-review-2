import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './App.css';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs'
import {store, persistor} from "./store/store"
import Review from "./components/Review/Review"
import NewsList from "./components/NewsPage/NewsList"

function App() {
  return (
    <div >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" render={() => <Home />}/>
              <Route exact path="/contact_us" render={() => <ContactUs />}/>
              <Route exact path="/review" render={() => <Review />}/>
              <Route exact path="/news" render={() => <NewsList />}/>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
