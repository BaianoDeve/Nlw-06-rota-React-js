import { Route, Switch } from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';

import { Home, NewRoom, Room, AdminRoom } from '../pages';

export function Routes() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />

        <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>
    </AuthProvider>
  );
}
