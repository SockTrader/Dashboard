import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {List, Paper, ListItem} from '@material-ui/core';

class DataList extends Component {

  getListItems() {
    return this.props.data.map((r, i) => <ListItem divider key={i}>O: {r.open} H: {r.high} L: {r.low} C: {r.close}</ListItem>);
  }

  render() {
    return <Paper style={{maxHeight: 600, overflow: 'auto'}}><List dense disablePadding>
      {this.getListItems()}
    </List></Paper>;
  }
}

DataList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default connect(
  ({candles}) => ({
    data: candles.list,
  }),
)(DataList);