import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SelectModal} from '../../SubComponent/Modal';

const SelectField = props => {
  const {
    items,
    customChecked,
    customUnchecked,
    multiple,
    confirmText,
    cancelText,
    label,
  } = props?.attributes;
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [result, setResult] = useState([]);

  const handleConfirm = item => {
    setResult(item);
    setOpen(false);
  };

  const handleCancel = () => {
    setSelectedItem(result);
    setOpen(false);
  };

  const itemPress = obj => {
    if (multiple) {
      const index = selectedItem.indexOf(obj);
      if (index !== -1) {
        let x = [...selectedItem];
        x.splice(index, 1);
        setSelectedItem(x);
      } else {
        setSelectedItem([...selectedItem, obj]);
      }
    } else {
      setResult(obj.value);
      setOpen(false);
    }
  };

  console.log(typeof result);

  const val = (typeof result === 'string' && result) || result.length;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginVertical: 10,
        }}>
        <Text>{label}</Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text>{(result.length && val) || 'None'}</Text>
        </TouchableOpacity>
      </View>
      <SelectModal
        item={items}
        visible={open}
        customChecked={(customChecked && customChecked) || null}
        customUnchecked={(customUnchecked && customUnchecked) || null}
        multiple={(multiple && multiple) || false}
        confirmText={confirmText && confirmText}
        cancelText={cancelText && cancelText}
        handleConfirm={() => {
          handleConfirm(selectedItem);
        }}
        handleCancel={handleCancel}
        itemPress={itemPress}
        selectedItem={selectedItem}
      />
    </View>
  );
};

export {SelectField};
