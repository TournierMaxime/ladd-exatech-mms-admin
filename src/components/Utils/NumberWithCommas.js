/**
 * Ajoute des virgules entre les milliers d'un nombre.
 *
 * @param {number} x - Le nombre à formater.
 * @returns {string} - Le nombre avec des virgules entre les milliers.
 */

export default function NumberWithCommas(x) {
  if (x === null || x === undefined) {
    return "0";  // Ou toute autre valeur par défaut que vous jugez appropriée
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
