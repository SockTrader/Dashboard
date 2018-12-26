import Chart from './../components/CandlestickChart';
import {connect} from 'react-redux';

const mapStateToProps = ({ candles }) => ({
  data: candles,
  width: 1000,
  ratio: 1,
  type: 'svg'
});

export default connect(mapStateToProps)(Chart);