import React, {Component} from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import {connect} from 'react-redux';
import {setSearchField, requestRobot} from '../action.js';


const mapStateToProps = state => {
  return {
    searchField:state.searchRobot.searchField,
    robots:state.setRobot.robots,
    isPending:state.setRobot.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchField:(event)=> dispatch(setSearchField(event.target.value)),
    onSearchRobots: () => dispatch(requestRobot())
  }
}

class App extends Component {
  componentDidMount() {
     this.props.onSearchRobots()
  }

  render() {

    const {searchField, onSearchField, robots, isPending} = this.props;
    const filterArray = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
       <h1 className="tc f1"> Loading </h1>  :
     (
        <div className="tc"> 
        <h1 className='f1'> RobotFriends </h1>
        <SearchBox onsearch={onSearchField}/>
        <Scroll>
        <CardList robots={filterArray}/>
        </Scroll>
        </div>
      );
    
    
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
