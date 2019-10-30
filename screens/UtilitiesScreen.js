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

const UtilitiesScreen = props => {

    return (
        <ScrollView>
            <View style={styles.container}>

                {/* CONTAINERS */}

                <TouchableOpacity style={styles.utilityContainer} onPress={() => props.navigation.navigate('UtilitiesDetails', { title: 'Restaurants' })}>
                    {/* CONTAINER ICON */}
                    <View style={styles.containerIconWrapper}>
                        <Ionicons color={COLORS.primaryColor} name="ios-wine" size={125} />
                    </View>

                    {/* CONTAINER TEXT */}
                    <View style={styles.containerTitleWrapper}>
                        <Text style={styles.containerTitle}>Restaurants</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.utilityContainer} onPress={() => props.navigation.navigate('UtilitiesDetails', { title : 'Events' })}>
                    {/* CONTAINER ICON */}
                    <View style={styles.containerIconWrapper}>
                        <Ionicons color={COLORS.primaryColor} name="ios-ribbon" size={125} />
                    </View>

                    {/* CONTAINER TEXT */}
                    <View style={styles.containerTitleWrapper}>
                        <Text style={styles.containerTitle}>Events</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.utilityContainer} onPress={() => props.navigation.navigate('UtilitiesDetails', { title : 'Shopping' })}>
                    {/* CONTAINER ICON */}
                    <View style={styles.containerIconWrapper}>
                        <Ionicons color={COLORS.primaryColor} name="ios-basket" size={125} />
                    </View>

                    {/* CONTAINER TEXT */}
                    <View style={styles.containerTitleWrapper}>
                        <Text style={styles.containerTitle}>Shopping</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.utilityContainer} onPress={() => props.navigation.navigate('UtilitiesDetails', { title : 'Tours' })}>
                    {/* CONTAINER ICON */}
                    <View style={styles.containerIconWrapper}>
                        <Ionicons color={COLORS.primaryColor} name="ios-boat" size={125} />
                    </View>

                    {/* CONTAINER TEXT */}
                    <View style={styles.containerTitleWrapper}>
                        <Text style={styles.containerTitle}>Tours</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.utilityContainer} onPress={() => props.navigation.navigate('UtilitiesDetails', { title : 'Technical' })}>
                    {/* CONTAINER ICON */}
                    <View style={styles.containerIconWrapper}>
                        <Ionicons color={COLORS.primaryColor} name="ios-cog" size={125} />
                    </View>

                    {/* CONTAINER TEXT */}
                    <View style={styles.containerTitleWrapper}>
                        <Text style={styles.containerTitle}>Technical</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.utilityContainer} onPress={() => props.navigation.navigate('UtilitiesDetails', { title : 'Wifi' })}>
                    {/* CONTAINER ICON */}
                    <View style={styles.containerIconWrapper}>
                        <Ionicons color={COLORS.primaryColor} name="ios-wifi" size={125} />
                    </View>

                    {/* CONTAINER TEXT */}
                    <View style={styles.containerTitleWrapper}>
                        <Text style={styles.containerTitle}>Wifi</Text>
                    </View>
                </TouchableOpacity>


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