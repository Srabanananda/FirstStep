import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import AuthStyles from '../../../Theme/AuthStyle';
import RouteName from '../../../Config/RouteName';


class Splash extends React.Component {


    onNeedWallet = () => {
        this.props.navigation.navigate(RouteName.Register)
    }

    onConnectWallet = () => {

    }

    render() {
        const { theme } = this.props;
        console.log(theme);
        const AuthStyle = AuthStyles(theme.colors)

        return (
            <ScrollView style={styles.Container}>
                <View style={styles.Container2}>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#000'
    }, Container2: {
        alignItems: 'center',
        backgroundColor: '#000'
    },
})


export default function (props) {
    const theme = useTheme();
    return <Splash {...props} theme={theme} />;
};
