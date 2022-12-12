import React from 'react';
import Geolocation from '@react-native-community/geolocation';

export interface LocationState {
  latitude: number;
  longitude: number;
}
export default function useLocation() {
  // flag de la primera location
  const [hasLocation, setHasLocation] = React.useState(false);
  // la info de la primera locacion
  const [initialPosition, setInitialPosition] = React.useState<LocationState>();
  // current location
  const [currentLocation, setCurrentLocation] = React.useState<LocationState>({
    latitude: 0,
    longitude: 0,
  });
  // listado de locaciones por donde ha pasado el usuario
  const [routesLines, setRoutesLines] = React.useState<LocationState[]>([]);
  // listener del gps
  const watchId = React.useRef<number>();

  // para dehabilitar cuando el componente esta desmontado
  const isMounted = React.useRef(true);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  //first request to take current location
  React.useEffect(() => {
    getCurrentLocation().then(location => {
      // apaga los listeners cuando el componente esta desmontado
      if (!isMounted.current) {
        return;
      }
      setInitialPosition(location);
      setCurrentLocation(location);
      setRoutesLines(routes => [...routes, location]);
      setHasLocation(true);
    });
  }, []);

  // promise que obtiene la locacion
  const getCurrentLocation = (): Promise<LocationState> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        //successfully request
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        // failed request
        err => reject({err}),
        //options
        {enableHighAccuracy: true},
      );
    });
  };

  // enciende el listeener que escucha las locaciones y  guarda la referencia en current location
  const followUserLocation = () => {
    // esta funcion retorna un numero. mediante ese numero podemos eliminar este listener.
    watchId.current = Geolocation.watchPosition(
      ({coords}) => {
        // apaga los listeners cuando el componente esta desmontado
        if (!isMounted.current) {
          return;
        }
        const location: LocationState = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };

        // console.log(routesLines);
        setCurrentLocation(location);
        setRoutesLines(routes => [...routes, location]);
      },
      // failed request
      err => {
        console.log({err});
      },
      //options, refresh every 10 metters
      {enableHighAccuracy: true, distanceFilter: 10},
    );
  };

  // borra el listener que sigue la ubicacion
  const stopFollowingUserLocation = () => {
    if (watchId.current) {
      Geolocation.clearWatch(watchId.current);
    }
  };

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    currentLocation,
    stopFollowingUserLocation,
    routesLines,
  };
}
