/* Ce code définit un composant React nommé "About".
 Ce composant retourne un JSX qui affiche une page "À propos" avec un titre "À propos",*/
 
import React from 'react';
 
export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>À propos</h1>
      <h2 style={{ color: 'red', fontStyle: 'italic',fontSize: '1.5em' }}>
        Cette page est publique et accessible à tous les utilisateurs.</h2>
      <p className='mb-4 text-slate-700'>
        Cette application permet aux utilisateurs de s&apos;inscrire, de se connecter, de se déconnecter, de supprimer un utilisateur
         et fournit l&apos;accès à des routes protégées uniquement pour les utilisateurs authentifiés.
      </p>
     
    </div>
  );
}

