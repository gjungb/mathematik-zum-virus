/**
 * Zwei aufeinander folgende Fallzahlen
 */
export type Consecutive = [Cases, Cases];

/**
 * Die Anzahl der Fälle
 */
export type Cases = number;

/**
 * Eine prozentuale Angabe
 */
export type Percentage = number;

/**
 * Die Daten eines Tages
 */
export type Day = {
  /**
   * Das Datum
   */
  date: Date;
  /**
   * Die absolute Zahl der Fälle an diesem Datum
   */
  cases: Cases;
  /**
   * Die Differenz der Fälle im Vergleich zum Vortag
   */
  diff: Cases;
  /**
   * Die relative Veränderung der Fälle im Vergleich zum Vortag
   */
  slope: Percentage;
};

/**
 * Eine Liste von Tagen
 */
export type Days = Readonly<Day[]>;
