import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from 'components/TaskList';
import SingleTask from 'components/SingleTask';
import SavedTasks from 'components/SavedTasks';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/task/:id" component={SingleTask} />
        <Route exact path="/saved" component={SavedTasks} />
        {/* Другие маршруты */}
      </Switch>
    </Router>
  );
};

export default App;
