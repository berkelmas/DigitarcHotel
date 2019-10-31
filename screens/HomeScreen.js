import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    StyleSheet
} from 'react-native';

const HomeScreen = props => {

    return (
        <View style={{backgroundColor : '#f7f7f7', flex : 1, alignItems : 'center'}}>
            <ImageBackground style={styles.image} source={require('../assets/images/home-page-background-blue.png')}>
            </ImageBackground>

            <View style={styles.card}>

                <View style={styles.cardHeader}>
                    <Text style={{fontSize : 22, textAlign : 'center', color : '#37474f', fontFamily : 'Montserrat-Light'}}>
                        Welcome To DigitArc Hotel
                    </Text>
                </View>

                <View style={styles.cardBody}>
                    <Text style={styles.cardBodyText}>
                        Mr. Oğuzhan Açıkgöz
                    </Text>
                    <Text style={styles.cardBodyText}>
                        Room Number: 1921
                    </Text>
                    <Text style={styles.cardBodyText}>
                        Booking Start : 19/12/2019
                    </Text>
                    <Text style={styles.cardBodyText}>
                        Booking End : 22/12/2019
                    </Text>
                </View>

            </View>

        </View>
    )
};

HomeScreen.navigationOptions = {
    title : 'Home',

    // HIDE HEADER
    headerShown : false
}

const styles = StyleSheet.create({
    card: {
        backgroundColor : 'white',
        height : Dimensions.get('window').height > 800 ? 285 : 285,
        width : '80%',
        borderRadius : 20,
        opacity : 1,
        marginTop : Dimensions.get('window').height > 800 ? -Dimensions.get('window').height * 1 / 10 : -Dimensions.get('window').height * 3 / 20,
        padding : 10,
        
        // SHADOW
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 15,

    },

    cardHeader : {
        padding : 10,
        borderBottomWidth : 1,
        borderBottomColor : 'gray'
    },

    cardBody : {
        padding : 10,
    },

    cardBodyText : {
        color : '#37474f',
        fontSize : 18,
        paddingVertical : 10,
        fontFamily : 'Montserrat-Light'
    },

    image : {
        width : '100%', 
        height : Dimensions.get('window').height * 3 / 5, 
        justifyContent : 'center', 
        alignItems : 'center',
    }
})

export default HomeScreen;