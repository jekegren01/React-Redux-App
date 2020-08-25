import React from 'react';
import { connect } from 'react-redux';
import SunRiseSunSet from './components/SunRiseSunSet';

const App = (props) => {
  return (
    <div className="App">
      <header>
        Here is my app!!!
      </header> 
      <SunRiseSunSet/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}
};

const madDispatchToProps = {};

export default connect(mapStateToProps, madDispatchToProps)(App);
