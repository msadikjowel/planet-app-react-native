import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { EarthSvg, MercurySvg, JupiterSvg, MarsSvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text preset='small' style={{ textTransform: 'uppercase' }}>{title}</Text>
            <Text preset='h2'>{value}</Text>
        </View>
    )
}

const Details = ({ navigation, route }) => {
    const planet = route.params.planet;
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

    const renderImage = () => {
        switch (name) {
            case 'mercury':
                return <MercurySvg />;
            case 'earth':
                return <EarthSvg />;
            case 'jupiter':
                return <JupiterSvg />;
            case 'mars':
                return <MarsSvg />;
            case 'neptune':
                return <NeptuneSvg />;
            case 'saturn':
                return <SaturnSvg />;
            case 'uranus':
                return <UranusSvg />;
            case 'venus':
                return <VenusSvg />;
        }
    };

    const onPressLink = () => {
        Linking.openURL(wikiLink);
    };

    return (

        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} title={name} />
            <ScrollView>

                <View style={styles.imageView}>
                    {renderImage()}
                </View>

                <View style={styles.detailsView}>
                    <Text preset='h1' style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Pressable onPress={onPressLink} style={styles.source}>
                        <Text>Source: </Text>
                        <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                </View>

                <View style={{ height: 40 }} />

                <PlanetSection title="ROTATION TIME" value={rotationTime} />
                <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
                <PlanetSection title="RADIUS" value={radius} />
                <PlanetSection title="AVG TEMP." value={avgTemp} />

            </ScrollView>
        </SafeAreaView>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    imageView: {
        marginTop: spacing[8],
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        alignItems: 'center'
    },
    name: {
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    description: {
        marginTop: spacing[5],
        textAlign: 'center',
        lineHeight: 24
    },
    source: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: spacing[5]
    },
    wikipedia: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    planetSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: spacing[4],
        paddingHorizontal: spacing[5],
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4]
    }
})
