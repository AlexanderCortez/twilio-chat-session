import Meeting from 'pages/Meeting';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RoomProvider } from 'store';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/meeting">
            <RoomProvider>
              <Meeting />
            </RoomProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
