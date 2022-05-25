import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { colors } from '../theme/colors';

const Details = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <Text> Details</Text>
        </SafeAreaView>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
})
