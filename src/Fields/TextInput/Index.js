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
    resizeMode: 'contain',
  },
});

const TextInputField = props => {
  const {inputIcon} = styles;
  const keyboardType = getKeyboardType(type);
  const {
    icon,
    containerStyle,
    textInputIconColor,
    iconDirection,
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
    type,
    value,
    ref,
    onSubmitEditing,
  } = props?.attributes;
  const {onChangeText} = props;
  const [text, setText] = useState(value);

  const width = Dimensions.get('window').width;

  return (
    <View
      style={[
        {flexDirection: 'row', marginHorizontal: 5, marginTop: 10},
        containerStyle && containerStyle,
      ]}>
      {icon && (
        <Image
          style={[
            {
              tintColor: textInputIconColor,
              justifyContent:
                (iconDirection === 'end' && 'flex-end') || 'flex-start',
            },
            inputIcon,
          ]}
          source={{uri: icon}}
        />
      )}
      {iconDirection === 'end' && error ? (
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
            padding: 5,
            width:
              (eyeIcon && inputWidth && inputWidth * 0.73) ||
              width * 0.73 ||
              (inputWidth && inputWidth * 0.85) ||
              width * 0.85,
          },
          style && style,
        ]}
        ref={ref}
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
        onChangeText={text => {
          onChangeText(text);
          setText(text);
        }}
        onSubmitEditing={onSubmitEditing}
      />
      {iconDirection !== 'end' && error ? (
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
