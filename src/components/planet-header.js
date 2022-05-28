import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './text/text';
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetHeader = ({ backBtn, title = "THE PLANETS" }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {backBtn && (
                <Pressable onPress={() => {
                    navigation.goBack();
                }}
                    style={{ marginRight: spacing[4] }}
                >
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
            )}
            <Text preset="h2" style={styles.title}>{title}</Text>
        </View>
    );
}

export default PlanetHeader;

const styles = StyleSheet.create({
    container: {
        paddingTop: spacing[10],
        padding: spacing[5],
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        textTransform: 'uppercase'
    }
})