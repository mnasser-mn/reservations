import { useMemo, useRef } from "react";
import reservationListJSON from "./data.json";
import { Filters, Reservation, Sort } from "./types";
import moment from "moment";
export type useGetReservationsProps = {
  filters?: Filters;
  sort?: Sort;
  keyword?: string;
};
export const useGetReservations = ({
  filters,
  sort,
  keyword,
}: useGetReservationsProps) => {
  const reservations = useRef<Reservation[]>(
    reservationListJSON.reservations as Reservation[]
  ).current;

  const filteredList = useMemo(() => {
    if (!filters && !keyword) return reservations;
    try {
      let updatedList = [...reservations];
      if (filters) {
        const { status, shift, area, date } = filters;
        if (status) {
          updatedList = updatedList.filter(
            (item: Reservation) => item.status === status
          );
        }
        if (shift) {
          updatedList = updatedList.filter(
            (item: Reservation) => item.shift === shift
          );
        }
        if (area) {
          updatedList = updatedList.filter(
            (item: Reservation) => item.area === area
          );
        }
        if (date) {
          updatedList = updatedList.filter((item: Reservation) => {
            switch (filters.date) {
              case "FUTURE":
                return moment(item.start).isAfter(moment.now());
              case "PAST":
                return moment(item.end).isBefore(moment.now());
              default:
                return true;
            }
          });
        }
      }
      if (keyword !== undefined) {
        const normalizedKeyword = keyword.trim().toLowerCase();
        updatedList = updatedList.filter((item: Reservation) => {
          const fullName =
            `${item.customer.firstName} ${item.customer.lastName}`.toLowerCase();
          return fullName.includes(normalizedKeyword);
        });
      }
      return updatedList;
    } catch (error) {
      console.error(error);
      return reservations;
    }
  }, [filters, keyword, reservations]);
  const sortedList = useMemo(() => {
    if (!sort || !sort.direction) return filteredList;
    const { field, direction } = sort;

    try {
      let updatedList = [...filteredList];

      const compareStrings = (a: string, b: string) =>
        direction === "ASC" ? a.localeCompare(b) : b.localeCompare(a);

      const compareNumbers = (a: number, b: number) =>
        direction === "ASC" ? a - b : b - a;
      switch (field) {
        case "Name": {
          updatedList.sort((a, b) =>
            compareStrings(
              `${a.customer.firstName} ${a.customer.lastName}`,
              `${b.customer.firstName} ${b.customer.lastName}`
            )
          );
          break;
        }
        case "Count": {
          updatedList.sort((a, b) => compareNumbers(a.quantity, b.quantity));
          break;
        }
        default:
          break;
      }
      return updatedList;
    } catch (error) {
      console.error(error);
      return filteredList;
    }
  }, [filteredList, sort]);
  return sortedList;
};
