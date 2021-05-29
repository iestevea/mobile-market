import React, { useState } from "react";
import { TextField} from "@material-ui/core";
import { MobileVm } from "./mobiles-list.vm";
import * as classes from "./mobiles-list.styles";
import { CardMobileComponent } from "./components";
import { useDebounce } from "use-debounce";

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
      <div className="filters-container">
        <h2>Filtra por marca o modelo: </h2>
        <TextField
          variant="outlined"
          size="small"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="list-container">
        {mobiles.map((mobile: MobileVm) => (
          <CardMobileComponent mobile={mobile} key={mobile.id} />
        ))}
      </div>
    </div>
  );
};
