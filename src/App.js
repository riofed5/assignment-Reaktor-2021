import React, {useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import {fetchData} from './helpers/dataAPIs';
import {AppProvider} from './helpers/context';
import CategoryPage from './pages/CategoryPage';
import Homepage from './pages/Homepage';

const App = () => {
  const [context, setContext] = useState(null)
  useEffect(() => {

    const setupApp = async () => {
      const data = await fetchData();
      setContext(data);
    }
    setupApp()

  }, [])

  return (
    <AppProvider value={{context, setContext}}>
      <Router>
        <div style={{height: '100%'}}>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/category/:category" component={CategoryPage} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
