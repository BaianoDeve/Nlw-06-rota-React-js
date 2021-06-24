import { BrowserRouter, Route } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
