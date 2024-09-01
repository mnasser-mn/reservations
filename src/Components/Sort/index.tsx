import { Sort, sortFields } from "../../MockData/types";
import { SortingField } from "./SortingField";
import styles from "./sort.module.css";
type Props = {
  sort: Sort;
  setSort: any;
};
export const SortControls = ({ sort, setSort }: Props) => {
  const handleFieldClick = (
    name: Sort["field"],
    direction: Sort["direction"] | undefined
  ) => setSort({ field: name, direction });
  return (
    <div className={styles.sortingList}>
      <h2>Sorting</h2>
      {sortFields.map((field) => (
        <SortingField
          key={field}
          name={field}
          direction={field === sort?.field ? sort.direction : undefined}
          onFieldClick={handleFieldClick}
        />
      ))}
    </div>
  );
};
