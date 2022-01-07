import React from 'react';
import {View} from 'react-native';
import TextInputField from '../Fields/TextInput/Index';
import SwitchField from '../Fields/Switch/Index';
import {DatePickerField} from '../Fields/Date/Index';
import {SelectField} from '../Fields/Select/Index';

const FormGenerator = props => {
  const {attributes} = props;

  const renderField = field => {
    switch (field?.key) {
      case 'TextInput':
        return <TextInputField attributes={field} />;
      case 'Switch':
        return <SwitchField attributes={field} />;
      case 'Date':
        return <DatePickerField attributes={field} />;
      case 'Select':
        return <SelectField attributes={field} />;
      case 'Email':
        return <TextInputField attributes={field} />;
    }
  };

  console.log(attributes);

  return (
    <View>
      {attributes.map(field => {
        return <View key={field?.label}>{renderField(field)}</View>;
      })}
    </View>
  );
};

export default FormGenerator;
