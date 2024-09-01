import { Reservation } from "../../MockData/types";
import { ReservationCard } from "./Reservation";
import styles from "./list.module.css";
type Props = {
  list: Reservation[];
};
export const ReservationList = ({ list }: Props) => {
  return (
    <div className={styles.list}>
      {(!list || list.length === 0) && (
        <p style={{ color: "black", fontWeight: "bold" }}>
          No Items in The List!
        </p>
      )}
      {list.map((item) => {
        return <ReservationCard reservation={item} key={item.id} />;
      })}
    </div>
  );
};
