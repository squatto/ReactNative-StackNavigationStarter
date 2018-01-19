import { Dimensions, Platform } from 'react-native';

let { width, height } = Dimensions.get('window');
let menuHeight = 64;
let statusBarHeight = 0;
if (Platform.OS !== 'ios') {
  statusBarHeight = 20;
  height = height - statusBarHeight;
  menuHeight = 44;
}

export const STATUS_BAR_HEIGHT = statusBarHeight;
export const HEIGHT = height;
export const WIDTH = width;
export const MENU_HEIGHT = menuHeight;
export const FOOTER_HEIGHT = (WIDTH - 200) / 4 + 33;
export const CONTENT_HEIGHT = HEIGHT - MENU_HEIGHT - FOOTER_HEIGHT;