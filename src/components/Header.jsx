import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid/Grid';
import PlayArrow from '@material-ui/icons/PlayArrow';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {startTrading} from '../actions/candles';

class Header extends Component {
  render() {
    return <AppBar position="static">
      <Toolbar>
        <Grid container justify={'flex-end'}>
          <Grid item xs={8}>
            <Typography variant="h4" color="inherit">
              SockTrader
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={this.props.onStart} variant="contained" color="secondary" style={{float: 'right'}}>
              <PlayArrow/> Start
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>;
  }
}

Header.propTypes = {
  onStart: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onStart: () => dispatch(startTrading())
});

export default connect(null, mapDispatchToProps)(Header);