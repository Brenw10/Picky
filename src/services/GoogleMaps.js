import { Linking } from 'react-native';
import { GOOGLE_MAPS_SEARCH } from '../core/Api';

function search(search) {
  Linking.openURL(GOOGLE_MAPS_SEARCH + search);
}

export default {
  search
}