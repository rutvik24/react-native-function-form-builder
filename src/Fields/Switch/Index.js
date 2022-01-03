import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';

const SwitchField = attributes => {
  const {label, textStyle, trackColor, thumbColor} = attributes?.attributes;
  const [isEnabled, setIsEnabled] = useState(false);

  console.log(isEnabled);

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 0,
          paddingVertical: 10,
          marginLeft: 15,
        },
      ]}>
      <Text style={[textStyle && textStyle, {fontSize: 15}]}>{label}</Text>
      <Switch
        value={isEnabled}
        onValueChange={() => {
          setIsEnabled(!isEnabled);
        }}
        trackColor={
          (trackColor && trackColor) || {true: '#1E4EDD', false: '#C8C8C8'}
        }
        thumbColor={(thumbColor && thumbColor) || '#CCC1C1'}
      />
    </View>
  );
};

export default SwitchField;
