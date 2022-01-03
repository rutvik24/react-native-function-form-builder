import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {simpleDate} from '../../Utils/Constant';

const DatePickerField = props => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const {modal, confirmText, cancelText, dateText} = props.attributes;

  //   const newDate = JSON.stringify(date).substring(1, 25);
  const newDate = moment(date).format(simpleDate);

  return (
    <View style={{marginVertical: 10, marginHorizontal: 15}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 15}}>{dateText}</Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={{fontSize: 15}}>{newDate}</Text>
        </TouchableOpacity>
      </View>
      <DatePicker
        modal={(modal && modal) || false}
        date={date}
        open={open}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        confirmText={(confirmText && confirmText) || 'Confirm'}
        cancelText={(cancelText && cancelText) || 'Cancel'}
      />
    </View>
  );
};

export {DatePickerField};
