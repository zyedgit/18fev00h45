// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
         Bienvenue Dans la page Home du TP1: GLO-3202 !</h1>
         <h2 style={{ color: 'red', fontStyle: 'italic',fontSize: '1em' }}>
          Cette page est publique et accessible à tous les utilisateurs. 
          Le profil de l'&apos;utilisateur connecté s&apos;affiche en cliquant sur son identification en haut a droite.</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
        Ce travail a pour principal objectif de mettre à l&apos;épreuve des connaissances en conception et en 
        déploiement d&apos;applications Web.
        Les concepts suivants seront vérifiés : le routage d&apos;URLs, la gestion de formulaires, 
        la validation de données, la sauvegarde de données, les cookies, le localStorage, le déploiement, etc.
        en utilisant :
        JavaScript, React, Redux Persist, bcryptjs pour le cryptage des mots de passe,
        mongoDb pour la base de données.
        <p>Le front-end de l&apos;application est construit avec React et utilise React Router pour le routage côté client.</p>
        <p>Le back-end est construit avec Node.js et Express, et utilise MongoDB comme base de données.
        L&apos;authentification est implémentée en utilisant JSON Web Tokens (JWT).</p>
      </p>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginTop: '30px' }}>
        Nom de l&apos;étudiant: <span style={{ color: '#FF4500' }}>ZYED, EL HIDRI</span></p>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>
        Numéro d&apos;identification (NI): <span style={{ color: '#FF4500' }}>111-159-762</span></p>
    </div>
    
  );
}