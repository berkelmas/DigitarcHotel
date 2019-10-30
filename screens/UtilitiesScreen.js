import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import { COLORS } from '../assets/globals/colors';

const UtilitiesScreen = props => {

    return (
        <ScrollView>
            <View style={styles.container}>
                
                {/* CONTAINERS */}
                <View style={styles.utilityContainer}>
                    {/* CONTAINER ICON */}
                    <View style={styles.containerIconWrapper}>

                    </View>

                    {/* CONTAINER TEXT */}
                    <View style={styles.containerTitleWrapper}>
                        <Text style={styles.containerTitle}>Restaurants</Text>
                    </View>
                </View>

                <View style={styles.utilityContainer}>

                </View>

                <View style={styles.utilityContainer}>

                </View>

                <View style={styles.utilityContainer}>

                </View>

                <View style={styles.utilityContainer}>

                </View>

                <View style={styles.utilityContainer}>

                </View>


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
        backgroundColor: '#f7f7f7',
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

    containerIconWrapper : {
        height : '80%'
    },

    containerTitleWrapper : {
        padding : 10,
        
    },

    containerTitle : {
        textAlign : 'center',
        fontSize : 15,
        color : COLORS.darkTextColor,
        fontFamily : 'Montserrat-Light'
    }

})

export default UtilitiesScreen;