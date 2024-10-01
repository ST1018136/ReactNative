import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const PriceScreen: React.FC = () => {
  const [price, setPrice] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Enter Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
  },
});

export default PriceScreen;
