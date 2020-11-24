import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

import './App.css';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container style={{ marginTop: '4em' }}>
          <Header
            size='huge'
            textAlign='center'
            style={{ marginBottom: '2em' }}
          >
            ~Franjk Portfolio~
          </Header>
          <Switch>
            <Route path='/projects/:projectId' component={SingleProject} />
            <Route path='/projects' component={Projects} />
            <Route path='/' exact component={Projects} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
