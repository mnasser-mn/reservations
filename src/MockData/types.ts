export type Customer = {
  firstName: string;
  lastName: string;
};

export const statusOptions = [
  "CONFIRMED",
  "SEATED",
  "CHECKED OUT",
  "NOT CONFIRMED",
] as const;
export const shiftOptions = ["BREAKFAST", "LUNCH", "DINNER"] as const;
export const areaOptions = ["BAR", "MAIN ROOM"] as const;
export const dateOptions = ["PAST", "FUTURE"] as const;
export const sortOptions = ["ASC", "DESC"] as const;
export const sortFields = ["Name", "Count"] as const;

export type Reservation = {
  id: number;
  businessDate: string; // Format: DD.MM.YYYY
  status: (typeof statusOptions)[number];
  shift: (typeof shiftOptions)[number];
  start: string;
  end: string;
  quantity: number;
  customer: Customer;
  area: (typeof areaOptions)[number];
  guestNotes: string;
};

export type ReservationsResponse = {
  reservations: Reservation[];
};

export type Filters = {
  date?: (typeof dateOptions)[number];
  status?: Reservation["status"];
  shift?: Reservation["shift"];
  area?: Reservation["area"];
};

export type Sort = {
  field: (typeof sortFields)[number];
  direction: (typeof sortOptions)[number] | undefined;
};
