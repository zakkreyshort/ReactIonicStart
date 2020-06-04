import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './App.css';
import { IonApp, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <IonApp>
       <Router>
         <Switch>
           <Route path='/' component={Home} />
         </Switch>
        </Router>
      </IonApp>
    );
  }
}

export default App;