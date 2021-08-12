import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import ImageService from '../services/Image';
import { Switch } from 'react-native-paper';
import Product from '../api/Product';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';

export default function ({ storeId, product, width, height, onPress, editable }) {
  const { token } = useUserToken();
  const { setContent } = useAlert();
  const [quantity, setQuantity] = useState(!!product.quantity);

  function onSwitchToogle() {
    Product.update(token, storeId, product._id, { quantity: 1 * !quantity })
      .then(() => setContent('Produto alterado com sucesso'))
      .catch(() => setQuantity(!quantity));
    setQuantity(!quantity);
  };

  function renderActiveSwitch() {
    return (
      <Switch value={quantity} color='#009688'
        onValueChange={() => onSwitchToogle()} />
    );
  }

  return (
    <TouchableOpacity style={{ ...styles.container, width, height }}
      onPress={onPress} disabled={!onPress}>
      <ImageBackground source={{ uri: ImageService.getUrlFromPath(product.image) }} style={styles.image} resizeMode='contain'>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        </View>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{product.name}</Text>
        {editable && renderActiveSwitch()}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  priceContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: 5,
    alignSelf: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  detailContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
    textAlign: 'center',
  },
});