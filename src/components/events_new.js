import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import { postEvent } from '../actions';


class EventsNew extends React.Component {

  render() {
    return(
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    );
  }
}

//const mapDispatchToProps = ({ postEvent });

export default connect(null, null)(EventsNew);