import Axios from 'axios';
import { PICKY_SERVER } from '../core/Api';

export default Axios.create({
  baseURL: PICKY_SERVER
});