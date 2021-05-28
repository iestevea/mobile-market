import React, { useState } from "react";
import { TextField, List } from "@material-ui/core";
import { MobileVm } from "./mobiles-list.vm";
import * as classes from "./mobiles-list.styles";
import { CardMobileComponent } from "./components";
import { useDebounce } from 'use-debounce';

interface Props {
  onFilter: (filter: string) => void;
  mobiles: MobileVm[];
}

export const MobilesListComponent: React.FC<Props> = ({
  onFilter,
  mobiles,
}) => {
  const [filter, setFilter] = useState<string>("");
  const [debouncedFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    onFilter(debouncedFilter);
  }, [debouncedFilter]);

  return (
    <div className={classes.root}>
      <h2>Filtra por marca o modelo: </h2>
      <div className="filters-container">
        <TextField
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <List>
        {mobiles.map((mobile: MobileVm) => (
          <CardMobileComponent mobile={mobile} key={mobile.id} />
        ))}
      </List>
    </div>
  );
};
