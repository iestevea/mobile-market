import { MobileApi } from "./api/mobile-detail.api-model";
import { MobileVm } from "./mobile-detail.vm";

export const mapMobileFromApiToVm = (mobile: MobileApi): MobileVm => ({
  ...mobile,
  cameras: [mobile.primaryCamera[0], mobile.secondaryCmera]
})