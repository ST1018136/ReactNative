import React from 'react';
import { View, Text,  StyleSheet,ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const SelectCourseMealScreen: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = React.useState('appetizer');

  return (
    <View style={styles.container}>
      <Text>Select Course:</Text>
  
      
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  background: {
    resizeMode: 'cover'
  },

});

export default SelectCourseMealScreen;