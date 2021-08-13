import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageService from '../services/Image';
import Category from '../api/Category';

export default function ({ setCategory, category }) {
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Category.getAll().then(({ data }) => setCategories(data));
  }, []);

  function onSelect(item) {
    setCategory(item);
    setVisible(false);
  }

  function renderItems() {
    return categories.map((category, index) =>
      <TouchableOpacity key={category._id}
        style={{ ...styles.item, marginTop: index ? 20 : 0 }}
        onPress={() => onSelect(category)}>
        <View style={{ ...styles.imageContainer, backgroundColor: category.color }}>
          <Image source={{ uri: ImageService.getUrlFromPath(category.image) }} style={styles.image} resizeMode='contain' />
        </View>
        <Text style={styles.itemText}>{category.name}</Text>
      </TouchableOpacity>
    );
  }

  function renderButton() {
    return (
      <TouchableOpacity style={{ ...styles.item, ...styles.selectedItem }} onPress={() => setVisible(true)}>
        {
          category &&
          <View style={{ ...styles.imageContainer, backgroundColor: category.color }}>
            <Image source={{ uri: ImageService.getUrlFromPath(category.image) }} style={styles.image} resizeMode='contain' />
          </View>
        }
        <Text textBreakStrategy='simple' style={{ ...styles.itemText, ...styles.selectedItemText }}>
          {category?.name || 'Categoria'}
        </Text>
        <Icon name="chevron-down" size={17} color="#444" />
      </TouchableOpacity>
    );
  }

  return (
    <Menu contentStyle={styles.menu} visible={visible}
      onDismiss={() => setVisible(false)} anchor={renderButton()}>
      {renderItems()}
    </Menu>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingVertical: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 30,
    color: '#666',
  },
  imageContainer: {
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  selectedItem: {
    justifyContent: 'center',
  },
  selectedItemText: {
    marginRight: 5,
  },
});