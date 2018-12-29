import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {discontinuousTimeScaleProvider} from 'react-stockcharts/lib/scale';
import {CandlestickSeries} from 'react-stockcharts/lib/series';
import {XAxis, YAxis} from 'react-stockcharts/lib/axes';
import OHLCTooltip from 'react-stockcharts/lib/tooltip/OHLCTooltip';
import {last} from 'react-stockcharts/lib/utils';
import {fitWidth} from 'react-stockcharts/lib/helper';
import {change} from 'react-stockcharts/lib/indicator';
import {EdgeIndicator, MouseCoordinateX, MouseCoordinateY, CrossHairCursor} from 'react-stockcharts/lib/coordinates';
import {timeFormat} from 'd3-time-format';
import {ChartCanvas, Chart} from 'react-stockcharts';
import {format} from 'd3-format';
import {BuyArrows, SellArrows} from './Arrows';
import Volume from './Volume';

class CandlestickChart extends Component {
  render() {
    const {type, data: initialData, width, ratio} = this.props;

    const changeCalculator = change();
    const calculatedData = changeCalculator(initialData);

    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
    const {
      data,
      xScale,
      xAccessor,
      displayXAccessor,
    } = xScaleProvider(calculatedData);

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 100)]);
    const xExtents = [start, end];

    const margin = {left: 60, right: 80, top: 20, bottom: 20};

    const height = 800;
    const gridHeight = height - margin.top - margin.bottom;
    const gridWidth = width - margin.left - margin.right;

    const gridProps = {tickStrokeOpacity: 0.25, tickStroke: '#333', stroke: '#333'};
    const yGrid = {innerTickSize: -1 * gridWidth};
    const xGrid = {innerTickSize: -1 * gridHeight};

    return <ChartCanvas height={height}
                        ratio={ratio}
                        width={width}
                        margin={margin}
                        type={type}
                        seriesName="MSFT"
                        data={data}
                        xScale={xScale}
                        xAccessor={xAccessor}
                        displayXAccessor={displayXAccessor}
                        xExtents={xExtents}
    >
      <Chart id={1} yExtents={[d => [d.high, d.low]]}>
        <XAxis axisAt="bottom" orient="bottom" {...gridProps} {...xGrid} />
        <YAxis axisAt="right" orient="right" ticks={10} {...gridProps} {...yGrid} />
        <OHLCTooltip origin={[-40, 0]} fontSize={14} labelFill={'#555'} textFill={'#0074b4'}/>
        <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')}/>
        <MouseCoordinateX at="bottom" orient="bottom" displayFormat={timeFormat('%Y-%m-%d')}/>
        <EdgeIndicator itemType="last" orient="right" edgeAt="right"
                       yAccessor={d => d.close}
                       fill={d => d.close > d.open ? '#58ac43' : '#a60000'}
        />

        <BuyArrows/>
        <SellArrows/>

        <CandlestickSeries
          fill={d => d.close > d.open ? '#38761d' : '#6f0000'}
          stroke={d => d.close > d.open ? '#58ac43' : '#a60000'}
          wickStroke={d => d.close > d.open ? '#58ac43' : '#a60000'}
        />
      </Chart>
      <Chart id={2} yExtents={[d => d.volume]} height={200} origin={(w, h) => [0, h - 200]}>
        <Volume />
      </Chart>
      <CrossHairCursor/>
    </ChartCanvas>;
  }
}

CandlestickChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['svg', 'hybrid']).isRequired,
};

CandlestickChart.defaultProps = {
  data: [],
  type: 'svg',
};

export default fitWidth(CandlestickChart);