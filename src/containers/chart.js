import Chart from './../components/CandlestickChart';
import {connect} from 'react-redux';
import {getFilledBuyOrders, getFilledSellOrders} from '../selectors/reports';

const mapStateToProps = state => ({
  data: state.candles.list,
  sellArrows: getFilledSellOrders(state),
  buyArrows: getFilledBuyOrders(state),
  ratio: 1,
  type: 'svg'
});

export default connect(mapStateToProps)(Chart);