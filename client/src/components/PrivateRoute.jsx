
/* Ce composant React sert de route privée dans l application en utilisant React Router.

Il utilise le hook useSelector de la bibliothèque React-Redux pour accéder à l'état 
du store Redux et récupérer l'utilisateur actuellement connecté (currentUser).

Ensuite, il renvoie un composant Outlet si un utilisateur est connecté, ce qui permettra
 d afficher le composant enfant de la route privée. Sinon, il renvoie un composant Navigate
 qui redirigera l'utilisateur vers la page de connexion ('/sign-in'). */

 
import {useSelector} from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    const {currentUser} = useSelector(state => state.user)
  return currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
}
