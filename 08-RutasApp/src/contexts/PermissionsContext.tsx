import React from 'react';
import {AppState, Platform} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';

export interface PermissionState {
  locationStatus: PermissionStatus;
}

export const permissionInitialState: PermissionState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionState;
  askLocationPermissions: () => void;
  checkLocationPermissions: () => void;
};

export const PermissionsContext = React.createContext(
  {} as PermissionsContextProps,
);

export const PermissionProvider = ({children}: {children: JSX.Element}) => {
  const [permissions, setPermissions] = React.useState(permissionInitialState);

  // primer verificacion de permisos
  React.useEffect(() => {
    // en el primer render obtiene el estado y genera el listener
    // pero solo el listener perdura
    checkLocationPermissions();

    AppState.addEventListener('change', state => {
      if (state !== 'active') {
        return;
      }
      checkLocationPermissions();
    });
  }, []);

  // realiza la peticion para obtener permisos
  const askLocationPermissions = async () => {
    // let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(permission => {
        if (permission === 'blocked') {
          openSettings();
        }
        setPermissions({...permissions, locationStatus: permission});
      });
    } else if (Platform.OS === 'android') {
      await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(
        permission => {
          if (permission === 'blocked') {
            openSettings();
          }
          setPermissions({...permissions, locationStatus: permission});
        },
      );
    }
  };

  // solo checkea los permissions
  const checkLocationPermissions = async () => {
    if (Platform.OS === 'ios') {
      // peticion para liberar permisos de location
      await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(permission =>
        setPermissions({...permissions, locationStatus: permission}),
      );
    } else if (Platform.OS === 'android') {
      await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(permission =>
        setPermissions({...permissions, locationStatus: permission}),
      );
    }
  };

  return (
    <PermissionsContext.Provider
      value={{permissions, askLocationPermissions, checkLocationPermissions}}>
      {children}
    </PermissionsContext.Provider>
  );
};
