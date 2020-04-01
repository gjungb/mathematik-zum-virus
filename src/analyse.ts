import { from, Observable } from "rxjs";
import { pairwise, map, reduce } from "rxjs/operators";
import { addDays } from "date-fns";
import { produce } from "immer";
import { Cases, Days, Consecutive, Day, Percentage } from "./model";

const analyse = (data: Cases[], startDate: Date): Observable<Days> => {
  const data$ = from(data);

  return data$.pipe(
    pairwise(),
    map<Consecutive, Day>(([prev, current], since) => {
      const date = addDays(startDate, since + 1);
      const cases = current;
      const diff = cases - prev;
      const slope: Percentage = (diff / prev) * 100;
      return {
        date,
        cases,
        diff,
        slope
      };
    }),
    reduce(
      (acc, cur) => produce(acc, draft => void draft.push(cur)),
      [] as Day[]
    )
  );
};

export default analyse;
