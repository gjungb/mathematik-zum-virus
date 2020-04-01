import { Days, Cases, Percentage } from "./model";
import { Data, Layout } from "plotly.js";

export function toPlotData(
  days: Days
): { data: Data[]; layout?: Partial<Layout> } {
  const x = days.map<Date>(pickProp("date"));
  const cases = days.map<Cases>(pickProp("cases"));
  const slope = days
    .map<Percentage>(pickProp("slope"))
    .map(slope => slope.toFixed(1));
  const data: Data[] = [
    {
      x,
      y: cases,
      type: "bar",
      name: "Fälle",
      opacity: 0.5
    },
    {
      x,
      y: slope,
      yaxis: "y2",
      type: "scatter",
      mode: "lines",
      name: "Änderung",
      number: {
        suffix: "%"
      },
      line: {
        color: "green"
      }
    }
  ];
  const layout: Partial<Layout> = {
    title: "Coronavirus-Fälle in Deutschland",
    width: 800,
    height: 600,
    yaxis: {
      title: "Fälle [n]"
    },
    yaxis2: {
      title: "Änderung [% / d]",
      overlaying: "y",
      side: "right"
    }
  };
  return {
    data,
    layout
  };
}

function pickProp<T extends object>(prop: keyof T) {
  return (obj: T): any => obj[prop];
}
