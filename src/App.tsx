import { useState } from "react";
import { ReservationList } from "./Components/ReservationList";
import { useGetReservations } from "./MockData";
import { Search } from "./Components/Search";
import styles from "./app.module.css";
import { FiltersControl } from "./Components/Filters";
import { Filters, Sort } from "./MockData/types";
import { SortControls } from "./Components/Sort";
export const App = () => {
  const [keyword, setKeyword] = useState("");
  const [filtersValue, setFiltersValue] = useState<Filters>();
  const [sort, setSort] = useState<Sort>({
    field: "Name",
    direction: undefined,
  });
  const sortedList = useGetReservations({
    filters: filtersValue,
    sort: sort,
    keyword: keyword,
  });

  return (
    <div>
      <div className={styles.searchWrapper}>
        <Search onSearch={setKeyword} />
      </div>
      <div className={styles.main}>
        <div className={styles.controls}>
          <FiltersControl
            filtersValue={filtersValue ?? {}}
            setFiltersValue={setFiltersValue}
          />
          <SortControls sort={sort} setSort={setSort} />
        </div>
        <div className={styles.listWrapper}>
          <ReservationList list={sortedList} />
        </div>
      </div>
    </div>
  );
};
export default App;
