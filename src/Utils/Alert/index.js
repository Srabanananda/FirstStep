import { Alert } from "react-native";
import strings from "../../Localization";
const callAlert = (msg, type,okTxt ,okPress,cancelTxt,isCancel,cancelPress) => {
    Alert.alert(
      type == 1 ? strings.SUCCESS : type== 2 ? strings.ERROR : strings.WARNING,
      msg,
      isCancel ?
      [
        { text: okTxt, onPress: okPress },
        {
          text: cancelTxt, onPress: cancelPress
        }
      ]:[
        { text: strings.OK, onPress: okPress },
      ],
      { cancelable: false }
    )
}
export default callAlert;