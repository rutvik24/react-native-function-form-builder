import React, {useState} from 'react';
import {
  View,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

const SelectModal = props => {
  const {
    customChecked,
    customUnChecked,
    item,
    visible,
    selectItem,
    multiple,
    confirmText,
    cancelText,
    onRequestClose,
    handleCancel,
    handleConfirm,
    itemPress,
    checked,
  } = props;

  const renderItem = ({item}) => {
    // if (selectItem.includes(obj?.item?.value)) {
    //   setChecked(true);
    // } else {
    //   setChecked(false);
    // }

    console.log(multiple);
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            itemPress(item);
          }}>
          {(multiple && (
            <Image
              source={{
                uri: (checked && 'checked') || 'unchecked',
              }}
            />
          )) ||
            null}
          <Text>{item?.label}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{justifyContent: 'center', alignSelf: 'center', marginTop: 200}}>
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        animationType="slide">
        <SafeAreaView>
          <FlatList
            data={item}
            keyExtractor={item => item.value}
            renderItem={renderItem}
          />
          {(multiple && (
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  handleConfirm(selectedItem);
                }}>
                <Text>{(confirmText && confirmText) || 'confirm'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel}>
                <Text>{(cancelText && cancelText) || 'cancel'}</Text>
              </TouchableOpacity>
            </View>
          )) ||
            null}
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export {SelectModal};
