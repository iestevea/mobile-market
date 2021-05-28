import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMobileDetail } from "./api";
import { MobileDetailComponent } from "./mobile-detail.component";
import { mapMobileFromApiToVm } from "./mobile-detail.mapper";
import { createEmptyMobile, MobileVm } from "./mobile-detail.vm";

export const MobileDetailContainer: React.FC = () => {
  const [mobile, setMobile] = useState<MobileVm>(createEmptyMobile());
  const { id }: any = useParams();

  const onLoadMobileDetail = async (mobileId: number) => {
    const apiMobileDetail = await fetchMobileDetail(mobileId);
    debugger;
    const vmMobileDetail = mapMobileFromApiToVm(apiMobileDetail);
    debugger;
    setMobile(vmMobileDetail);
    debugger;
  };

  React.useEffect(() => {
    onLoadMobileDetail(id);
  }, []);

  return <MobileDetailComponent mobile={mobile} />;
};
