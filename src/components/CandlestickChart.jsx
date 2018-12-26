import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {discontinuousTimeScaleProvider} from 'react-stockcharts/lib/scale';
import {BarSeries, CandlestickSeries} from 'react-stockcharts/lib/series';
import {XAxis, YAxis} from 'react-stockcharts/lib/axes';
import { timeFormat } from "d3-time-format";
import {ChartCanvas, Chart} from 'react-stockcharts';
import {last} from 'react-stockcharts/lib/utils';
import {format} from 'd3-format';
import EdgeIndicator from 'react-stockcharts/lib/coordinates/EdgeIndicator';
import MouseCoordinateY from 'react-stockcharts/lib/coordinates/MouseCoordinateY';
import CrossHairCursor from 'react-stockcharts/lib/coordinates/CrossHairCursor';
import MouseCoordinateX from 'react-stockcharts/lib/coordinates/MouseCoordinateX';

class CandlestickChart extends Component {
  render() {
    const {type, data: initialData, width, ratio} = this.props;

    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
    const {
      data,
      xScale,
      xAccessor,
      displayXAccessor,
    } = xScaleProvider(initialData);

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 100)]);
    const xExtents = [start, end];

    return <ChartCanvas height={400}
                        ratio={ratio}
                        width={width}
                        margin={{left: 50, right: 50, top: 10, bottom: 30}}
                        type={type}
                        seriesName="MSFT"
                        data={data}
                        xScale={xScale}
                        xAccessor={xAccessor}

                        displayXAccessor={displayXAccessor}
                        xExtents={xExtents}
    >
      <Chart id={1} yExtents={d => [d.high, d.low]}>
        <XAxis axisAt="bottom" orient="bottom"/>
        <YAxis axisAt="right" orient="right" ticks={5}/>
        <MouseCoordinateY
          at="right"
          orient="right"
          displayFormat={format(".2f")} />
        <MouseCoordinateX
          at="bottom"
          orient="bottom"
          displayFormat={timeFormat("%Y-%m-%d")} />
        <EdgeIndicator itemType="last" orient="right" edgeAt="right"
                       yAccessor={d => d.close}
                       fill={d => d.close > d.open ? "#6BA583" : "#FF0000"}
        />
        <CandlestickSeries/>
      </Chart>
      <Chart id={2} yExtents={d => d.volume}>
        <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format('.2s')}/>
        <MouseCoordinateY
          at="left"
          orient="left"
          displayFormat={format(".2f")} />

        <BarSeries yAccessor={d => d.volume}/>
      </Chart>
      <CrossHairCursor />
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
  type: 'svg',
};

export default CandlestickChart;