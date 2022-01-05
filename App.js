import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FormGenerator from './src/FormBuilder/Index';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [password, setPassword] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const attribute = [
    {
      key: 'TextInput',
      icon: 'email',
      textInputIconColor: 'black',
      label: 'email',
      numberOfLines: 3,
      placeholderColor: 'blue',
      keyboardType: 'email',
      type: 'email',
    },
    {
      icon: 'email',
      textInputIconColor: 'black',
      label: 'password',
      key: 'TextInput',
      keyboardType: 'email',
      secureTextEntry: password,
      eyeIcon: 'email',
      eyePress: () => {
        showPassword();
      },
    },
    {
      label: 'male',
      trackColor: {true: 'red', false: 'green'},
      thumbColor: 'green',
      key: 'Switch',
    },
    {
      key: 'Date',
      label: 'Date',
      pickerMode: 'date',
      dateText: 'BirthDay',
    },
    {
      label: 'Colors',
      key: 'Select',
      items: [
        {label: 'Blue', value: 'Blue'},
        {label: 'Black', value: 'Black'},
        {label: 'White', value: 'White'},
        {label: 'Red', value: 'Red'},
      ],
      multiple: true,
      customChecked: 'checked',
      customUnChecked: 'unchecked',
    },
  ];

  const showPassword = () => {
    setPassword(!password);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <FormGenerator attributes={attribute} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
