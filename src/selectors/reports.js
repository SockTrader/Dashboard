import {createSelector} from "reselect";

export const getReports = state => state.reports;

export const getFilledSellOrders = createSelector(
  [getReports],
  (reports) => reports.filter(r => r.side === "sell" && r.status === "filled" && r.reportType === "trade"),
);

export const getFilledBuyOrders = createSelector(
  [getReports],
  (reports) => reports.filter(r => r.side === "buy" && r.status === "filled" && r.reportType === "trade"),
);