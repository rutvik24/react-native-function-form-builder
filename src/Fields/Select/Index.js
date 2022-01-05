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
  const [checked, setChecked] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  console.log('selectedItem', selectedItem);

  const handleConfirm = item => {
    console.log(item);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const itemPress = obj => {
    if (multiple) {
      setChecked(!checked);
      if (selectedItem.indexOf(obj) !== -1) {
        const items = selectedItem?.filter(i => {
          i.value !== obj.value;
        });
        setSelectedItem(items);
      } else {
        setSelectedItem([...selectedItem, obj]);
      }
    } else {
      setSelectedItem(obj.value);
      console.log(selectedItem);
      setOpen(false);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10,
      }}>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text>{label}</Text>
      </TouchableOpacity>
      <Text>{'Blue'}</Text>
      <SelectModal
        item={items}
        visible={open}
        customChecked={(customChecked && customChecked) || null}
        customUnchecked={(customUnchecked && customUnchecked) || null}
        multiple={(multiple && multiple) || false}
        confirmText={confirmText && confirmText}
        cancelText={cancelText && cancelText}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        itemPress={itemPress}
        checked={checked}
      />
    </View>
  );
};

export {SelectField};
