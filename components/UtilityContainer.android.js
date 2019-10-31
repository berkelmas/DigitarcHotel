import React from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../assets/globals/colors';

// FONT AWESOME ICONS
import Icon from './Icon';

const UtilityContainer = props => {

    return (
        <View style={ styles.utilityContainer }>
            {/* CONTAINERS */ }
            <TouchableNativeFeedback style={{justifyContent : 'space-evenly'}} onPress={props.onPress.bind(this, props.link, props.title)}>
                <View style={{justifyContent : 'space-evenly'}}>
                    {/* CONTAINER ICON */ }
                    < View style={ styles.containerIconWrapper } >
                        <Icon color={COLORS.primaryColor} name={props.icon} size={125} />
                    </View >

                    {/* CONTAINER TEXT */ }
                    < View style={ styles.containerTitleWrapper } >
                        <Text style={styles.containerTitle}> {props.title} </Text>
                    </View >
                </View>
            </TouchableNativeFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
    utilityContainer: {
        height: 200,
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
        overflow : 'hidden',

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
});

export default UtilityContainer;