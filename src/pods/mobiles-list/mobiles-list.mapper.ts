import { MobileApi } from "./api"
import { MobileVm } from "./mobiles-list.vm"

const mapMobileFromApiToVm = (mobile: MobileApi): MobileVm => ({
  id: mobile.id,
  imgUrl: mobile.imgUrl,
  model: mobile.model,
  brand: mobile.brand,
  price: parseFloat(mobile.price) || 0
})

export const mapMobilesListFromApiToVm = (mobilesList) =>
  mobilesList.map((mobile) => mapMobileFromApiToVm(mobile))