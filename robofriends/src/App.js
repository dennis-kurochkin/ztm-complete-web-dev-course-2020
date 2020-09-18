import React from 'react';
import CardList from './CardList';
import { robots } from './robots';

const App = (props) => {
  return ( 
    <React.Fragment>
      <h1>RoboFriends</h1>
      <CardList robots={robots} />
    </React.Fragment>
   );
}
 
export default App;