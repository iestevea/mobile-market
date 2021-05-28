import React from "react";
import { Header } from "../common/header/header";
import { MobilesListContainer } from "../pods/mobiles-list/mobiles-list.container";

export const MobilesListScene: React.FC = () => {
  return (
    <div className="content">
      <Header />
      <MobilesListContainer />
    </div>
  );
};
