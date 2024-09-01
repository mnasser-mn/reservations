import { Button, Select } from "antd";
import styles from "./filtes.module.css";
import {
  areaOptions,
  dateOptions,
  Filters,
  shiftOptions,
  statusOptions,
} from "../../MockData/types";
type Props = {
  filtersValue: Filters;
  setFiltersValue: any;
};
export const FiltersControl = ({ filtersValue, setFiltersValue }: Props) => {
  return (
    <div className={styles.filtersWrapper}>
      <h2>Filters</h2>
      <Select
        className={styles.filter}
        placeholder="Status"
        value={filtersValue?.status}
        onSelect={(value) =>
          setFiltersValue({ ...filtersValue, status: value })
        }
      >
        {statusOptions.map((option) => (
          <Select.Option value={option} key={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
      <Select
        className={styles.filter}
        placeholder="Shift"
        value={filtersValue?.shift}
        onSelect={(value) => setFiltersValue({ ...filtersValue, shift: value })}
      >
        {shiftOptions.map((option) => (
          <Select.Option value={option} key={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
      <Select
        className={styles.filter}
        placeholder="Area"
        value={filtersValue?.area}
        onSelect={(value) => setFiltersValue({ ...filtersValue, area: value })}
      >
        {areaOptions.map((option) => (
          <Select.Option value={option} key={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
      <Select
        className={styles.filter}
        placeholder="Date"
        value={filtersValue?.date}
        onSelect={(value) => setFiltersValue({ ...filtersValue, date: value })}
      >
        {dateOptions.map((option) => (
          <Select.Option value={option} key={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
      <Button
        danger
        onClick={() => {
          setFiltersValue({});
        }}
      >
        Clear filters
      </Button>
    </div>
  );
};
