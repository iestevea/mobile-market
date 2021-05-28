import React from "react";
import { Header } from "../common/header/header";
import { MobileDetailContainer } from "../pods/mobile-detail/mobile-detail.container";

export const MobileDetailScene: React.FC = () => {
  return (
    <div className="content">
      <Header />
      <MobileDetailContainer />
    </div>
  );
};
