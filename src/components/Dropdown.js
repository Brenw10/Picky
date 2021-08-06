import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';

export default function ({ items, setSelected, displayField, text }) {
  const [visible, setVisible] = useState(false);

  function onSelect(item) {
    setSelected(item);
    setVisible(false);
  }

  function renderItems() {
    return items.map(item =>
      <Menu.Item
        key={item._id}
        onPress={() => onSelect(item)}
        titleStyle={styles.item}
        title={item[displayField]} />
    );
  }

  function renderButton() {
    return (
      <Button color='#666' icon='chevron-down'
        contentStyle={styles.buttonContainer}
        labelStyle={styles.buttonText}
        onPress={() => setVisible(true)}>
        {text}
      </Button>
    );
  }

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={renderButton()}>
      {renderItems()}
    </Menu>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row-reverse',
  },
  buttonText: {
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
  },
  item: {
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
  },
});