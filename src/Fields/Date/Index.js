import React, {useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {simpleDate} from '../../Utils/Constant';

const DatePickerField = props => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const {
    dateText,
    pickerMode,
    minimumDate,
    maximumDate,
    containerStyle,
    DateModalStyle,
    labelStyle,
    dateStyle,
    errorTextStyle,
    errorText,
  } = props?.attributes;
  const {onChange, error} = props;

  const newDate = moment(date).format(simpleDate);

  const handleConfirm = dateTime => {
    setDate(dateTime);
    setOpen(false);
  };

  return (
    <View style={{marginVertical: 10, marginHorizontal: 15}}>
      <View
        style={[
          {flexDirection: 'row', justifyContent: 'space-between'},
          containerStyle && containerStyle,
        ]}>
        <Text style={[{fontSize: 15}, labelStyle && labelStyle]}>
          {dateText}
        </Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={[{fontSize: 15}, dateStyle && dateStyle]}>
            {newDate}
          </Text>
        </TouchableOpacity>
      </View>
      {(error && (
        <Text style={[{color: 'red'}, errorTextStyle && errorTextStyle]}>
          {(errorText && errorText) || 'This field is required'}
        </Text>
      )) ||
        null}
      {open && (
        <DateTimePickerModal
          isVisible={open}
          mode={pickerMode}
          onConfirm={handleConfirm}
          onCancel={() => {
            setOpen(false);
          }}
          onChange={dateTime => {
            setDate(dateTime);
            onChange(dateTime);
          }}
          display={(Platform.OS === 'ios' && 'inline') || 'default'}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          style={DateModalStyle && DateModalStyle}
        />
      )}
    </View>
  );
};

export {DatePickerField};
