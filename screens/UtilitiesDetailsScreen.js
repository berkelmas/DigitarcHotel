import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import EventCard from '../components/EventCard';

const UtilitiesDetailScreen = props => {

    return (
        <ScrollView style={styles.container} contentContainerStyle={{alignItems : 'center'}}>
            <EventCard header="A La Carte Restaurant" imageSource={require('../assets/images/hamburger-cover.png')} />
            <EventCard header="Spagetti Restaurant" imageSource={require('../assets/images/hamburger-cover.png')} />
            <EventCard header="Indian Restaurant" imageSource={require('../assets/images/hamburger-cover.png')} />

        </ScrollView>
    )
};

UtilitiesDetailScreen.navigationOptions = navigationData => ({
    title : navigationData.navigation.getParam('title')
})

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})

export default UtilitiesDetailScreen;