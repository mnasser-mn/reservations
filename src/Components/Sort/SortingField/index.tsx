import { Button } from "antd";
import { Sort, sortFields, sortOptions } from "../../../MockData/types";
import styles from "./sortingfield.module.css";
type Props = {
  name: (typeof sortFields)[number];
  direction: (typeof sortOptions)[number] | undefined;
  onFieldClick: (
    name: Sort["field"],
    direction: Sort["direction"] | undefined
  ) => void;
};
export const SortingField = ({ name, direction, onFieldClick }: Props) => {
  const getIcon = () => {
    const iconClass = `material-symbols-outlined ${
      direction ? "" : styles.dimmed
    }`;
    if (direction === "ASC")
      return <span className={iconClass}>arrow_upward</span>;
    if (direction === "DESC")
      return <span className={iconClass}>arrow_downward</span>;
    return <span className={iconClass}>arrow_upward</span>; 
  };
  const directionValue = () => {
    if (direction === undefined) return "ASC";
    if (direction === "ASC") return "DESC";
    if (direction === "DESC") return undefined;
  };
  return (
    <Button
      className={styles.field}
      type="link"
      iconPosition="end"
      icon={getIcon()}
      onClick={() => {
        onFieldClick(name, directionValue());
      }}
    >
      {name}
    </Button>
  );
};
