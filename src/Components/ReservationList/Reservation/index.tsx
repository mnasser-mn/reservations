import moment from "moment";
import { Reservation } from "../../../MockData/types";
import styles from "./card.module.css";

type Props = {
  reservation: Reservation;
};
export const ReservationCard = ({ reservation }: Props) => {
  const { customer, quantity, start, end, area, status, shift, guestNotes } =
    reservation;
  return (
    <div
      className={`${styles.card} ${
        styles[`${status.replace(/\s/g, "").toLowerCase()}`]
      }`}
    >
      <div className={styles.header}>
        <h2 className={styles.customer}>
          {customer.firstName} {customer.lastName}
        </h2>
        <p
          className={`${styles[`${status.replace(/\s/g, "").toLowerCase()}`]}`}
        >
          <strong>{status}</strong>
        </p>
      </div>
      <div className="details">
        <p className="duration">
          {moment(start).format("MMMM Do YYYY, h:mm a")} -{" "}
          {moment(end).format("h:mm a")}
        </p>
        <p className="area">Area: {area}</p>
        <p className="count">Guests: {quantity}</p>
        <p className="shift">Shift: {shift}</p>
        {guestNotes && <p className="guest-notes">Notes: {guestNotes}</p>}
      </div>
    </div>
  );
};
