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

  const handleConfirm = item => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const itemPress = obj => {
    if (multiple) {
      const index = selectedItem.indexOf(obj);
      if (index !== -1) {
        let x = selectedItem;
        x.splice(index, 1);
        console.log('x', x);
        setSelectedItem(x);
      } else {
        setSelectedItem([...selectedItem, obj]);
      }
    } else {
      setSelectedItem(obj.value);
      setOpen(false);
    }
  };

  console.log('sel', selectedItem);

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
        // checked={checked}
        selectedItem={selectedItem}
      />
    </View>
  );
};

export {SelectField};
