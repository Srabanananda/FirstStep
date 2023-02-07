import { StyleSheet } from 'react-native';
import { fonts } from "../Constant";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../Utils/LayoutMeasurement';
import { getBottomSpace, getStatusBarHeight } from '../Utils/RFValueData';

const CommonStyles = colors => StyleSheet.create({
    flexRowSpace: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    justifyContent: {
        justifyContent: "center",
    },
    flexOne: {
        flex: 1,
    },
    flexDirection: {
        flexDirection: "row",
    },
    container: {
        flex: 1,
        backgroundColor: colors.ScreenBackground,
        paddingHorizontal: wp('4'),
        paddingBottom: getBottomSpace() - hp('2'),
        paddingTop: fonts.IS_IOS ? getStatusBarHeight() + 20 : hp('3'),
    },
    flexEnd: {
        position: 'absolute',
        bottom: hp('15')
    },
    BackArrow: {
        height: hp('2.5'),
        width: hp('2.5'),
        alignSelf: 'flex-start',
    },
    LabelTxt: {
        fontSize: fonts.FONT_22,
        color: colors.Font,
        fontFamily: fonts.G_BOLD,
        marginBottom: hp('2'),
    },
    DescTxt: {
        fontSize: fonts.FONT_14,
        color: colors.DarkGray,
        fontFamily: fonts.G_MEDIUM,
        marginBottom: hp('4'),
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

});

export default CommonStyles;
