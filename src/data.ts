import { parseISO } from "date-fns";

/**
 * Der Beginn der Messungen
 */
export const startDate = parseISO("2020-03-01");

/**
 * Die Messergebnisse beginnend am `startDate`
 * *Wichtig* aktuelle Zahl oben ergänzen
 * @see {https://interaktiv.waz.de/corona-virus-karte-infektionen-deutschland-weltweit/}
 */
export default [
  70985, // 31.03.2020
  66125,
  58655,
  54268,
  49039,
  43211,
  37323,
  32991,
  29056,
  24873,
  22364,
  19848,
  15320,
  12327,
  9360,
  7272,
  5813,
  4585,
  3675,
  2745,
  1966,
  1565,
  1139,
  903,
  795,
  639,
  400,
  262,
  188,
  150,
  117
].reverse();
