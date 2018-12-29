import React, {Component} from 'react';
import {CircularProgress, AppBar, Button, Typography, Toolbar, Grid} from '@material-ui/core';
import {PlayArrow, Cancel, CheckCircle} from '@material-ui/icons';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {startTrading} from '../actions/websocket';
import s from './Header.module.scss';

class Header extends Component {

  getConnecting() {
    if (this.props.connecting) {
      return <div className={s.status}>
        <CircularProgress size={20} color={'secondary'}/>
      </div>;
    }
  }

  getStatus() {
    if (this.props.connecting) return;
    return <div className={s.status}>
      <span className={s.text}>Status</span>
      {this.props.connected ? <CheckCircle className={s.connected}/> : <Cancel className={s.disconnected} />}
    </div>;
  }

  render() {
    return <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h4" color="inherit">
              SockTrader
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify={'flex-end'} alignItems={'center'} alignContent={'flex-end'}>
              <Grid item xs={3}>
                {this.getConnecting()}
                {this.getStatus()}
              </Grid>
              <Grid item xs={3}>
                <Button onClick={this.props.onStart} variant="contained" color="secondary">
                  <PlayArrow/> Start
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>;
  }
}

Header.propTypes = {
  onStart: PropTypes.func.isRequired,
  connected: PropTypes.bool.isRequired,
  connecting: PropTypes.bool.isRequired,
};

export default connect(
  ({websocket}) => ({
    connected: websocket.connected,
    connecting: websocket.connecting,
  }),
  (dispatch) => ({
    onStart: () => dispatch(startTrading()),
  }),
)(Header);