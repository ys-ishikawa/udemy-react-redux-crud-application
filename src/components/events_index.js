import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';
import _ from 'lodash';


class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvnets() {
    return _.map(this.props.events, event => (
      <tr key={ event.id }>
        <td>{ event.id }</td>
        <td>{ event.title }</td>
        <td>{ event.body }</td>
      </tr>

    ))
  }

  render() {
    return(
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            { this.renderEvnets() }
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);