import { Route, Switch } from 'react-router-dom'

import './App.css';
import Portfolio from './Screens/Portfolio'
import AboutMe from './Screens/AboutMe'
import Resume from './Screens/Resume'

const App = () => (
  <Switch>
    <Route path='/aboutme' component={AboutMe} />
    <Route path='/resume' component={Resume} />
    <Route path='/' component={Portfolio} />
  </Switch>
)

export default App;
