import { PICKY_SERVER } from '../core/Api';
import { isUrl } from '../services/Util';

function getUrlFromPath(path) {
  if (isUrl(path)) return path;
  if (path.charAt(0) === '/') return PICKY_SERVER + path.substring(1);
  return PICKY_SERVER + path;
}

export default {
  getUrlFromPath,
};