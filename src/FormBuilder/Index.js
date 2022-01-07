import React, {useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import TextInputField from '../Fields/TextInput/Index';
import SwitchField from '../Fields/Switch/Index';
import {DatePickerField} from '../Fields/Date/Index';
import {SelectField} from '../Fields/Select/Index';

const FormGenerator = props => {
  const {
    attributes,
    submitText,
    onSubmitPress,
    submitStyle,
    submitTextStyle,
    style,
    validation,
  } = props;
  let result = {};
  let ref = useRef(null);

  const renderField = field => {
    switch (field?.key) {
      case 'TextInput':
        return (
          <TextInputField
            attributes={field}
            onChangeText={text => {
              result[field.label] = text || '';
            }}
            ref={ref[field.label]}
          />
        );
      case 'Switch':
        return (
          <SwitchField
            attributes={field}
            onValueChange={value => {
              result[field.label] = value || false;
            }}
          />
        );
      case 'Date':
        return (
          <DatePickerField
            attributes={field}
            onChange={date => {
              result[field.label] = date || '';
            }}
          />
        );
      case 'Select':
        return (
          <SelectField
            attributes={field}
            onChange={item => {
              result[field.label] = item || [];
            }}
          />
        );
    }
  };

  const handleValidation = () => {
    for (var i = 0; i < attributes.length; i++) {
      if (
        result[attributes[i].label] === undefined ||
        result[attributes[i].label].length === 0
      ) {
        if (attributes[i].regex) {
          if (
            attributes[i].regex.test(result[attributes[i].label]) === false &&
            attributes[i].ref
          ) {
            attributes[i].ref.current.focus();
          }
          return attributes[i].regex.test(result[attributes[i].label]);
        } else {
          if (attributes[i].ref) {
            attributes[i].ref.current.focus();
          }
          return attributes[i].label + ' is required';
        }
      }
    }
  };

  return (
    <View>
      {attributes.map(field => {
        return (
          <View key={field?.label} style={style && style}>
            {renderField(field)}
          </View>
        );
      })}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={[
            {
              height: 50,
              width: 100,
              alignContent: 'center',
              justifyContent: 'center',
            },
            submitStyle && submitStyle,
          ]}>
          <TouchableOpacity
            onPress={() => {
              onSubmitPress(result);
              validation(handleValidation());
            }}>
            <Text
              style={[
                {textAlign: 'center'},
                submitTextStyle && submitTextStyle,
              ]}>
              {(submitText && submitText) || 'SUBMIT'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FormGenerator;
