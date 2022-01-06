import React, {useEffect, useState} from 'react';
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
    multiple,
    confirmText,
    cancelText,
    onRequestClose,
    handleCancel,
    handleConfirm,
    itemPress,
    checked,
    selectedItem,
  } = props;

  const renderItem = ({item}) => {
    // let checked = false;
    // if (selectedItem.indexOf(item) === -1) {
    //   checked = false;
    // } else {
    //   checked = true;
    // }
    return (
      <View
        style={{
          borderTopWidth: 0.5,
          borderTopColor: 'gray',
          borderBottomColor: 'gray',
          borderEndWidth: 0.5,
          margin: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            itemPress(item);
          }}
          style={{flexDirection: 'row'}}>
          {(multiple && (
            <Image
              source={{
                uri: (checked && 'checked') || 'unchecked',
              }}
              style={{
                height: 25,
                width: 25,
                margin: 5,
              }}
            />
          )) ||
            null}
          <Text style={{fontSize: 18, margin: 5}}>{item?.label}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        animationType="slide"
        transparent={true}>
        <SafeAreaView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 50,
              backgroundColor: 'white',
            }}>
            <View style={{height: '60%', width: '80%'}}>
              <FlatList
                data={item}
                keyExtractor={item => item.value}
                renderItem={renderItem}
              />
            </View>
            {(multiple && (
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    handleConfirm(selectedItem);
                  }}>
                  <Text style={{marginVertical: 10, marginRight: 10}}>
                    {(confirmText && confirmText) || 'confirm'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel}>
                  <Text style={{marginVertical: 10, marginRight: 10}}>
                    {(cancelText && cancelText) || 'cancel'}
                  </Text>
                </TouchableOpacity>
              </View>
            )) ||
              null}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export {SelectModal};
