import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInputField from '../Fields/TextInput/Index';
import SwitchField from '../Fields/Switch/Index';

const FormGenerator = props => {
  const {attributes} = props;

  const renderField = field => {
    console.log(field);
    switch (field?.key) {
      case 'TextInput':
        return <TextInputField attributes={field} />;
      case 'Switch':
        return <SwitchField attributes={field} />;
    }
  };

  return (
    <View>
      {attributes.map(field => {
        return <View key={field?.label}>{renderField(field)}</View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default FormGenerator;
