import Chart from './../components/CandlestickChart';
import {connect} from 'react-redux';

const mapStateToProps = ({ candles }) => ({
  data: candles,
  ratio: 1,
  type: 'svg'
});

export default connect(mapStateToProps)(Chart);