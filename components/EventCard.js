import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

const EventCard = props => {

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}> { props.header } </Text>
            </View>
            <View style={styles.cardBody}>
                <Image style={{ height : '100%', width : '100%' }} source={props.imageSource} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card : {
        height: Dimensions.get('window').width,
        width: (Dimensions.get('window').width * 9) / 10,
        backgroundColor : 'white',
        marginTop : 20,
        borderRadius : 4,

        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    cardHeader : {
        borderBottomWidth : 1,
        borderBottomColor : '#eceff1',
        height : '15%',
        justifyContent : 'center',
        padding : 5,
    },
    cardHeaderText : {
        fontFamily : 'Montserrat-Light',
        fontWeight : '200',
        fontSize : 20
    },
    cardBody: {
        height : '85%'
    },
})

export default EventCard;