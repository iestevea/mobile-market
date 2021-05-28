import React, { useEffect, useState } from "react";
import {
  fetchMobilesList,
  filterMobilesList,
} from "./api";
import { MobilesListComponent } from "./mobiles-list.component";
import { mapMobilesListFromApiToVm } from "./mobiles-list.mapper";
import { MobileVm } from "./mobiles-list.vm";

export const MobilesListContainer: React.FC = () => {
  const [mobiles, setMobiles] = useState<MobileVm[]>([]);

  const onLoadMobilesList = async () => {
    const apiMobilesList = await fetchMobilesList();
    const vmMobilesList = mapMobilesListFromApiToVm(apiMobilesList);
    setMobiles(vmMobilesList);
  };

  const onFilterMobilesList = async (search: string) => {
    const apiMobilesList = await filterMobilesList(search);
    const vmMobilesList = mapMobilesListFromApiToVm(apiMobilesList);
    setMobiles(vmMobilesList);
  };

  useEffect(() => {
    onLoadMobilesList();
  }, []);

  return (
    <MobilesListComponent
      mobiles={mobiles}
      onFilter={onFilterMobilesList}
    />
  );
};
