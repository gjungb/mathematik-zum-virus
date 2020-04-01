import { newPlot } from "plotly.js";
import { map, tap } from "rxjs/operators";
import analyse from "./analyse";
import { toPlotData } from "./plot";
import data, { startDate } from "./data";

const days$ = analyse(data, startDate);

days$
  .pipe(
    tap(result => console.log(result)),
    map(toPlotData)
  )
  .subscribe({
    next: ({ data, layout }) => newPlot("app", data, layout)
  });
