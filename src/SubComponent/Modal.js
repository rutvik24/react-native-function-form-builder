import React from 'react';
import {
  View,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
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
    label,
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
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="slide"
      transparent={true}>
      <View
        style={[
          {
            alignItems: 'center',
            backgroundColor: '#FFFFFF7F',
            flex: 1,
          },
          modalContainerStyle && modalContainerStyle,
        ]}>
        <View
          style={{
            flex: 1,
            width: '100%',
            marginTop: 50,
            marginBottom: -5,
            marginVertical: 10,
            padding: 25,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            backgroundColor: '#F5F5F5',
            elevation: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              paddingBottom: 5,
            }}>
            <Text style={{marginLeft: 10, fontWeight: '800', fontSize: 22}}>
              {label}
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={handleCancel}>
                <Text
                  style={[
                    {
                      marginVertical: 10,
                      marginRight: 10,
                      color: 'white',
                      borderRadius: 10,
                      borderWidth: 0.5,
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                      backgroundColor: '#303134',
                    },
                    cancelStyle && cancelStyle,
                  ]}>
                  {(cancelText && cancelText) || 'CANCEL'}
                </Text>
              </TouchableOpacity>
              {(multiple && (
                <TouchableOpacity
                  onPress={() => {
                    handleConfirm(selectedItem);
                  }}>
                  <Text
                    style={[
                      {
                        marginVertical: 10,
                        marginRight: 10,
                        color: 'white',
                        borderRadius: 10,
                        borderWidth: 0.5,
                        paddingVertical: 6,
                        backgroundColor: '#303134',
                        paddingHorizontal: 10,
                      },
                      confirmStyle && confirmStyle,
                    ]}>
                    {(confirmText && confirmText) || 'CONFIRM'}
                  </Text>
                </TouchableOpacity>
              )) ||
                null}
            </View>
          </View>
          <View style={{flex: 1, marginTop: 20}}>
            <FlatList
              data={item}
              keyExtractor={item => item.value}
              renderItem={renderItem}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {SelectModal};
