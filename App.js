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
      numberOfLines: 1,
      placeholderColor: 'blue',
      keyboardType: 'email',
      type: 'email',
      value: '',
      regex: reg,
      ref: emailRef,
      onSubmitEditing: () => {
        passwordRef.current.focus();
      },
      isRequired: true,
      errorText: 'Email is Invalid',
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
      isRequired: true,
    },
    {
      label: 'male',
      trackColor: {true: 'red', false: 'green'},
      thumbColor: 'green',
      key: 'Switch',
      value: false,
      isRequired: true,
    },
    {
      key: 'Date',
      label: 'Date',
      pickerMode: 'date',
      dateText: 'BirthDay',
    },
    {
      label: "Color's",
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
      value: [],
      isRequired: true,
    },
  ];

  const showPassword = () => {
    setPassword(!password);
  };

  const onSubmitPress = item => {
    console.log(item);
  };

  return (
    <SafeAreaView>
      <View>
        <FormGenerator attributes={attribute} onSubmitPress={onSubmitPress} />
      </View>
    </SafeAreaView>
  );
};

export default App;
