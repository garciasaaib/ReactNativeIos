import {MenuItem} from '../interfaces/appInterfaces';

// listado de elementos para Flatlist, puede ser de cualquier otra interface
export const listMenuItems: MenuItem[] = [
  {
    title: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    title: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    title: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    title: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    title: 'TextInput',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    title: 'Form',
    icon: 'keypad-outline',
    component: 'FormScreen',
  },
  {
    title: 'Pull To Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    title: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    title: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    title: 'Infinite Scroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    title: 'Infinite Scroll Images',
    icon: 'images-outline',
    component: 'InfiniteScrollImagesScreen',
  },
  {
    title: 'Slides',
    icon: 'map-outline',
    component: 'SlidesScreen',
  },
  {
    title: 'Slides Animated',
    icon: 'shapes-outline',
    component: 'SlidesAnimatedScreen',
  },
  {
    title: 'Change Theme',
    icon: 'flower-outline',
    component: 'ChangeThemeScreen',
  },
];
