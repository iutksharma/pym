// src/screens/DetailsScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

interface Props {
  navigation: DetailsScreenNavigationProp;
}

const DetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Details Screen</Text>
      <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
