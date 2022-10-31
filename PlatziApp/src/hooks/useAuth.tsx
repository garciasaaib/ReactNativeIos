import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

// esta estrucura ejecuta el hook y de esa manera no tenemos que inicializarlo y ejecutarlo
// lo que hace este hook es solo darnos todo el store del context, para no volver a inicializarlo
export default () => useContext(AuthContext);
