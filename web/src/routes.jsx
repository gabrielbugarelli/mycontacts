import { Route, Switch } from 'react-router-dom';
import { NewContact } from './pages/NewContact';
import { EditContact } from './pages/EditContact';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" exact component={NewContact} />
      <Route path="/edit/:id" exact component={EditContact} />
    </Switch>
  );
}
