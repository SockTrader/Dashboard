import BarAnnotation from 'react-stockcharts/lib/annotation/BarAnnotation';
import Annotate from 'react-stockcharts/lib/annotation/Annotate';
import React from 'react';

const dateMatcher = reports => ({date: d}) => {
  const found = reports.find(({createdAt: r}) => {
    return  r.getFullYear() === d.getFullYear()
      && r.getMonth() === d.getMonth()
      && r.getDate() === d.getDate()
      && r.getHours() === d.getHours()
  });
  return !!(found);
};

export const SellArrows = (props) => {
  return <Annotate with={BarAnnotation} when={dateMatcher(props.reports)} usingProps={{
    y: ( { yScale, datum } ) => yScale( datum.high ),
    fill: "#a60000",
    textIcon: "⬇",
    textIconFontSize: 18,
    textIconFill: "#a60000",
    textIconXOffset: -8,
    textIconYOffset: -20,
    text: "SELL",
    textFill: "#333",
    textXOffset: -12,
    textYOffset: -40,
    textRotate: 0,
    textAnchor: "start",
  }} />
};

export const BuyArrows = (props) => {
  return <Annotate with={BarAnnotation} when={dateMatcher(props.reports)} usingProps={{
    y: ( { yScale, datum } ) => yScale( datum.low ),
    fill: "#58ac43",
    textIcon: "⬆",
    textIconFontSize: 18,
    textIconFill: "#58ac43",
    textIconXOffset: -8,
    textIconYOffset: 30,
    text: "BUY",
    textFill: "#333",
    textXOffset: -10,
    textYOffset: 45,
    textRotate: 0,
    textAnchor: "start",
  }} />
};