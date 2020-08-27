import React from 'react';
import { connect } from 'react-redux';
import SunRiseSunSet from './components/SunRiseSunSet';

const App = (props) => {
  return (
    <div className="App">
      <header>
        SUNRISE AND SUNSET TIME APP!!!
      </header> 
      <SunRiseSunSet/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
