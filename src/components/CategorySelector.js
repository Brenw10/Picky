import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Button, Menu } from 'react-native-paper';

export default function ({ categories, setCategory, category }) {
  const [visible, setVisible] = useState(false);

  function onSelect(item) {
    setCategory(item);
    setVisible(false);
  }

  function renderItems() {
    return categories.map((category, index) =>
      <TouchableOpacity
        key={category._id}
        style={{ ...styles.item, marginTop: index ? 20 : 0 }}
        onPress={() => onSelect(category)}>
        <View style={{ ...styles.imageContainer, backgroundColor: category.color }}>
          <Image source={category.image} style={styles.image} resizeMode='contain' />
        </View>
        <Text style={styles.itemText}>{category.name}</Text>
      </TouchableOpacity>
    );
  }

  function renderButton() {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setVisible(true)}>
        <View style={{ ...styles.imageContainer, ...styles.selectedImageContainer, backgroundColor: category.color }}>
          <Image source={category.image} style={styles.image} resizeMode='contain' />
        </View>
        <Text style={styles.itemText}>{category.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Menu
      contentStyle={{ paddingVertical: 15 }}
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={renderButton()}>
      {renderItems()}
    </Menu>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: 'AirbnbCereal-Light',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 30,
  },
  imageContainer: {
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 10,
    elevation: 8,
  },
  image: {
    width: 35,
    height: 35,
  },
  selectedImageContainer: {
    elevation: 0,
  },
});