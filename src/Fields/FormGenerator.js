import React from 'react';
import {View, StyleSheet} from 'react-native';
import {keyExtractor} from 'react-native/Libraries/Lists/VirtualizeUtils';
import SwitchField from './Switch/Index';
import TextInputField from './TextInput/Index';

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
