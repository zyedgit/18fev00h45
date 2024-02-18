
// composant React qui définit l'en-tête de l'application "memoryBook". 
//Il affiche un titre "memoryBook" cliquable qui renvoie à la page d'accueil,
// ainsi qu'un menu de navigation avec des liens vers les pages
// "Home", "About" et "Sign In" ou le nom de l'utilisateur actuellement connecté.

/* Le composant utilise le hook useSelector de la bibliothèque react-redux pour
 accéder à l'état global de l'application et récupérer l'utilisateur actuellement connecté. 
En fonction de la valeur de currentUser, le composant affiche soit le texte "Sign In", 
soit le nom de l'utilisateur actuellement connecté avec un style particulier. */

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-blue-600'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>memoryBook</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/profile' className='text-white'>
              {currentUser ? (
                <span style={{ backgroundColor: 'white', padding: '0.1em 0.4em', borderRadius: '0.2em' }}>
                  <span style={{ fontWeight: 'bold', color: 'limegreen' }}>{currentUser.username}</span>
                  <span style={{ color: 'black' }}> est connecté(e)</span>
                </span>
              ) : (
                'Sign In'
              )}
            </Link>
        </ul>
      </div>
    </div>
  );
}
