import React, {useEffect} from 'react';
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
    selectedItem,
    cancelStyle,
    confirmStyle,
    modalContainerStyle,
    listContainerStyle,
  } = props;

  const renderItem = ({item}) => {
    let checked = false;
    if (selectedItem.indexOf(item) === -1) {
      checked = false;
    } else {
      checked = true;
    }
    const checkedImage = (customChecked && customChecked) || 'checked';
    const unCheckedImage = (customUnChecked && customUnChecked) || 'unchecked';

    return (
      <View
        style={[
          {
            borderTopWidth: 0.5,
            borderTopColor: 'gray',
            borderBottomColor: 'gray',
            borderEndWidth: 0.5,
            margin: 5,
          },
          listContainerStyle && listContainerStyle,
        ]}>
        <TouchableOpacity
          onPress={() => {
            itemPress(item);
          }}
          style={{flexDirection: 'row'}}>
          {(multiple && (
            <Image
              source={{
                uri: (checked && checkedImage) || unCheckedImage,
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
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                margin: 50,
                backgroundColor: 'white',
              },
              modalContainerStyle && modalContainerStyle,
            ]}>
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
                <TouchableOpacity onPress={handleCancel}>
                  <Text
                    style={[
                      {marginVertical: 10, marginRight: 10},
                      cancelStyle && cancelStyle,
                    ]}>
                    {(cancelText && cancelText) || 'cancel'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleConfirm(selectedItem);
                  }}>
                  <Text
                    style={[
                      {marginVertical: 10, marginRight: 10},
                      confirmStyle && confirmStyle,
                    ]}>
                    {(confirmText && confirmText) || 'confirm'}
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
