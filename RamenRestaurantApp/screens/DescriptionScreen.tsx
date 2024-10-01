import React from 'react';
import { View, TextInput, Text, StyleSheet, ImageBackground } from 'react-native';

const DescriptionScreen: React.FC = () => {
  const [description, setDescription] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Enter Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
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
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
    marginTop: 10,
  },

  


});

export default DescriptionScreen;
