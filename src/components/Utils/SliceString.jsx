import React from 'react';

/**
* Composant pour tronquer une chaîne de caractères avec des points de suspension.
* @param {object} props - L'objet props.
* @param {string} props.string - La chaîne de caractères à tronquer.
* @param {boolean} props.prefix - Indique si le préfixe doit être ajouté à la chaîne tronquée.
* @param {string} props.className - La classe CSS pour le composant.
* @returns {React.ReactElement} Le composant SliceString.
*/

export default function SliceString({ string, prefix, className }) {
  let slice = (prefix ? ' ' : '') + string.slice(0, 10) + '...';
  return <span className={className}>{slice}</span>;
}
