import Meeting from 'pages/Meeting';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/meeting" component={Meeting} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
