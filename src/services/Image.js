import { PICKY_SERVER } from '../core/Api';

function getUrlFromPath(path) {
  if (path.charAt(0) === '/')
    return PICKY_SERVER + path.substring(1);
  return PICKY_SERVER + path;
}

export default {
  getUrlFromPath,
};