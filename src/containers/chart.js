import Chart from './../components/CandlestickChart';
import {connect} from 'react-redux';

const mapStateToProps = ({ candles }) => ({
  data: candles.list,
  ratio: 1,
  type: 'svg'
});

export default connect(mapStateToProps)(Chart);