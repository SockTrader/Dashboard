import BarAnnotation from 'react-stockcharts/lib/annotation/BarAnnotation';
import Annotate from 'react-stockcharts/lib/annotation/Annotate';
import React from 'react';

export const SellArrows = () => {
  return <Annotate with={BarAnnotation} when={d => d.date.getDate() === 1} usingProps={{
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

export const BuyArrows = () => {
  return <Annotate with={BarAnnotation} when={d => d.date.getDate() === 1} usingProps={{
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