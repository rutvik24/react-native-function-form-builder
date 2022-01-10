import React, {useEffect, useRef, useState} from 'react';
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
  } = props;
  let result = {};
  let ref = useRef(null);
  let error = {};
  const [er, setEr] = useState(error);

  const renderField = field => {
    // const handleValidation = () => {
    //   if (field.isRequired) {
    //     if (
    //       result[field.label] === undefined ||
    //       result[field.label].length === 0
    //     ) {
    //       if (field.ref) {
    //         field.ref.current.focus();
    //       }
    //       return field.label + 'is required';
    //     } else if (field.regex) {
    //       if (
    //         field.regex.test(result[attributes[i].label]) === false &&
    //         field.ref
    //       ) {
    //         field.ref.current.focus();
    //       }
    //       return field.regex.test(result[attributes[i].label]);
    //     }
    //   }
    // };

    console.log('switch', er);

    switch (field?.key) {
      case 'TextInput':
        if (!result[field.label]) {
          if (field.value) {
            result[field.label] = field.value;
          } else {
            result[field.label] = '';
          }
        }
        return (
          <TextInputField
            attributes={field}
            onChangeText={text => {
              result[field.label] = text || '';
            }}
            ref={ref[field.label]}
            error={er[field.label]}
          />
        );
      case 'Switch':
        if (!result[field.label]) {
          if (field.value) {
            result[field.label] = field.value;
          } else {
            result[field.label] = false;
          }
        }
        return (
          <SwitchField
            attributes={field}
            onValueChange={value => {
              result[field.label] = value || false;
            }}
          />
        );
      case 'Date':
        if (!result[field.label]) {
          if (field.value) {
            result[field.label] = field.value;
          } else {
            result[field.label] = '';
          }
        }
        return (
          <DatePickerField
            attributes={field}
            onChange={date => {
              result[field.label] = date || '';
            }}
          />
        );
      case 'Select':
        if (!result[field.label]) {
          if (field.value) {
            result[field.label] = field.value;
          } else {
            result[field.label] = '';
          }
        }
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
      if (attributes[i].isRequired === true) {
        if (
          result[attributes[i].label] === undefined ||
          result[attributes[i].label].length === 0
        ) {
          if (attributes[i].ref) {
            attributes[i].ref.current.focus();
          }
          error[attributes[i].label] = true;
        } else if (attributes[i].regex) {
          if (
            attributes[i].regex.test(result[attributes[i].label]) === false &&
            attributes[i].ref
          ) {
            attributes[i].ref.current.focus();
            error[attributes[i].label] = true;
          } else {
            error[attributes[i].label] = false;
          }
        }
      }
    }
    setEr(error);
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
              handleValidation();
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
