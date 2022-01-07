import React, {useRef, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import FormGenerator from './src/FormBuilder/Index';
const App = () => {
  const [password, setPassword] = useState(true);
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailRef = useRef(null);
  let passwordRef = useRef(null);
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
      value: '',
      regex: reg,
      ref: emailRef,
      onSubmitEditing: () => {
        passwordRef.current.focus();
      },
    },
    {
      icon: 'email',
      textInputIconColor: 'black',
      label: 'password',
      key: 'TextInput',
      keyboardType: 'email',
      secureTextEntry: password,
      eyeIcon: (password && 'unchecked') || 'checked',
      eyePress: () => {
        showPassword();
      },
      value: '',
      ref: passwordRef,
    },
    {
      label: 'male',
      trackColor: {true: 'red', false: 'green'},
      thumbColor: 'green',
      key: 'Switch',
      value: false,
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
      customChecked: 'email',
      customUnChecked: 'checked',
      value: [],
    },
  ];

  const showPassword = () => {
    setPassword(!password);
  };

  const onSubmitPress = item => {
    console.log(item);
  };

  const validation = item => {
    console.log('validation', item);
  };

  return (
    <SafeAreaView>
      <View>
        <FormGenerator
          attributes={attribute}
          onSubmitPress={onSubmitPress}
          validation={validation}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
