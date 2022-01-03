import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getKeyboardType} from '../../Utils/Methods';

const styles = StyleSheet.create({
  inputIcon: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    margin: 10,
    resizeMode: 'center',
  },
});

const TextInputField = attributes => {
  const {inputIcon} = styles;
  const inputProps = attributes.props;
  const refName = useRef(null);
  const keyboardType = getKeyboardType(attributes.type);
  const [text, setText] = useState('');
  const {
    icon,
    border,
    textInputIconColor,
    direction,
    error,
    errorIconColor,
    style,
    numberOfLines,
    secureTextEntry,
    label,
    placeholderColor,
    editable,
    eyeIcon,
    eyePress,
    inputWidth,
  } = attributes?.attributes;

  const width = Dimensions.get('window').width;

  const handleChangeText = text => {
    setText(text);
  };

  return (
    <View
      style={[
        {flexDirection: 'row', marginHorizontal: 10, marginTop: 10},
        border && border,
      ]}>
      {icon && (
        <Image
          style={[
            {
              tintColor: textInputIconColor,
              justifyContent:
                (direction === 'end' && 'flex-end') || 'flex-start',
            },
            inputIcon,
          ]}
          source={{uri: icon}}
        />
      )}
      {direction === 'end' && error ? (
        <Image
          style={[
            {
              tintColor: (errorIconColor && errorIconColor) || 'red',
              marginHorizontal: 5,
            },
            inputIcon,
          ]}
          source={{uri: error}}
        />
      ) : null}
      <TextInput
        style={[
          {
            height:
              inputProps &&
              inputProps.multiline &&
              (Platform.OS === 'ios' ? undefined : null),
            padding: 5,
            width:
              (eyeIcon && inputWidth && inputWidth * 0.73) ||
              width * 0.73 ||
              (inputWidth && inputWidth * 0.85) ||
              width * 0.85,
          },
          style && style,
        ]}
        ref={refName}
        underlineColorAndroid={'transparent'}
        numberOfLines={numberOfLines && numberOfLines}
        secureTextEntry={secureTextEntry}
        placeholder={label}
        blurOnSubmit={false}
        placeholderTextColor={
          (placeholderColor && placeholderColor) || '#979797'
        }
        editable={editable}
        value={text}
        keyboardType={keyboardType}
        onChangeText={text => handleChangeText(text)}
        {...inputProps}
      />
      {direction !== 'end' && error ? (
        <Image
          style={[{tintColor: errorIconColor, marginHorizontal: 5}, inputIcon]}
          source={{uri: error}}
        />
      ) : null}
      {(eyeIcon && (
        <TouchableOpacity onPress={eyePress}>
          <Image
            source={{uri: eyeIcon}}
            style={[inputIcon, {alignSelf: 'flex-end'}]}
          />
        </TouchableOpacity>
      )) ||
        null}
    </View>
  );
};

export default TextInputField;
