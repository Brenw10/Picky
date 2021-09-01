import { PICKY_SERVER } from '../core/Api';
import String from '../services/String';

function getUrlFromPath(path) {
  if (String.isUrl(path)) return path;
  if (path.charAt(0) === '/') return PICKY_SERVER + path.substring(1);
  return PICKY_SERVER + path;
}

export default {
  getUrlFromPath,
};