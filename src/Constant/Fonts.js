import { Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { RFValue } from "../Utils/RFValueData";
let isTablet = DeviceInfo.isTablet()


export const fonts = {
  M_BOLD: 'Montserrat-Bold',
  M_MEDIUM: 'Montserrat-Medium',
  M_REGULAR: 'Montserrat-Regular',

  FONT_7: RFValue(8),
  FONT_8: RFValue(9.5),
  FONT_10: RFValue(10),
  FONT_11: RFValue(11),
  FONT_12: RFValue(12),
  FONT_13: RFValue(13),
  FONT_14: RFValue(14),
  FONT_16: RFValue(16),
  FONT_18: RFValue(18),
  FONT_20: RFValue(20),
  FONT_22: RFValue(22),
  FONT_25: RFValue(25),
  FONT_26: RFValue(26),
  FONT_32: RFValue(32),
  FONT_80: RFValue(80),
  
  IS_TABLET: isTablet,
  IS_IOS: Platform.OS == 'ios',
}
