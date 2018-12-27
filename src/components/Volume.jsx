import React from 'react';
import {YAxis} from 'react-stockcharts/lib/axes/index';
import {format} from 'd3-format';
import {MouseCoordinateY} from 'react-stockcharts/lib/coordinates/index';
import {BarSeries} from 'react-stockcharts/lib/series/index';
import {Chart} from 'react-stockcharts';

export default (props) => {
  return <Chart yExtents={[d => d.volume]} height={200} origin={(w, h) => [0, h - 200]}{...props}>
    <YAxis axisAt="left" orient="left" ticks={10} tickFormat={format('.2s')}/>
    <MouseCoordinateY at="left" orient="left" displayFormat={format('.4s')}/>
    <BarSeries yAccessor={d => d.volume} widthRatio={0.5} fill={d => d.close > d.open ? '#38761d' : '#6f0000'}/>
  </Chart>;
}