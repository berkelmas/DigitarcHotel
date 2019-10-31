import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../assets/globals/colors';

import UtilityContainer from '../components/UtilityContainer';

const UtilitiesScreen = props => {

    const onPress = (link, title) => {
        props.navigation.navigate(link, {title : title})
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <UtilityContainer title="Restaurants" link="UtilitiesDetails" icon={'french-fries'} onPress={onPress} />
                <UtilityContainer title="Events" link="UtilitiesDetails" icon={'calendar'} onPress={onPress} />
                <UtilityContainer title="Shopping" link="UtilitiesDetails" icon={'shopping-bag'} onPress={onPress} />
                <UtilityContainer title="Tours" link="UtilitiesDetails" icon={'directions'} onPress={onPress} />
                <UtilityContainer title="Technical" link="UtilitiesDetails" icon={'tools'} onPress={onPress} />
                <UtilityContainer title="Wifi" link="UtilitiesDetails" icon={'wifi'} onPress={onPress} />

            </View>
        </ScrollView>
    )
};

UtilitiesScreen.navigationOptions = {
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        borderRadius: 10,
        padding: 15,
        paddingTop: 25,
    },
    utilityContainer: {
        height: 200,
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.00,

        elevation: 8,
    },

    containerIconWrapper: {
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerTitleWrapper: {
        padding: 10,

    },

    containerTitle: {
        textAlign: 'center',
        fontSize: 21,
        color: COLORS.darkTextColor,
        fontFamily: 'Montserrat-Light'
    }

})

export default UtilitiesScreen;