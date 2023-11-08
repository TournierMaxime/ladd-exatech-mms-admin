export function ToastUpdateSuccess(toastUpdate, message, sticky, life) {

  /**
 * Affiche un toast avec un message donné.
 *
 * @param {React.MutableRefObject} toastInfo - Référence à l'objet Toast.
 * @param {string} message - Message à afficher dans le toast.
 * @param {boolean} sticky - Si le toast doit être collant.
 * @param {number} life - Durée d'affichage du toast en millisecondes.
 * @returns {void}
 */

  const options = {
    severity: 'success',
    detail: message,
    sticky: !!sticky,
    life: sticky === true ? null : (life || 3000),
  }

  toastUpdate.current.show(options);
}

export function ToastCreateSuccess(toastCreate, message, sticky, life) {

  /**
 * Affiche un toast avec un message donné.
 *
 * @param {React.MutableRefObject} toastInfo - Référence à l'objet Toast.
 * @param {string} message - Message à afficher dans le toast.
 * @param {boolean} sticky - Si le toast doit être collant.
 * @param {number} life - Durée d'affichage du toast en millisecondes.
 * @returns {void}
 */

  const options = {
    severity: 'success',
    detail: message,
    sticky: !!sticky,
    life: sticky === true ? null : (life || 3000),
  }
  toastCreate.current.show(options);
}

export function ToastError(toastError, message, sticky, life) {

  /**
 * Affiche un toast avec un message donné.
 *
 * @param {React.MutableRefObject} toastInfo - Référence à l'objet Toast.
 * @param {string} message - Message à afficher dans le toast.
 * @param {boolean} sticky - Si le toast doit être collant.
 * @param {number} life - Durée d'affichage du toast en millisecondes.
 * @returns {void}
 */

  const options = {
    severity: 'error',
    detail: message,
    sticky: !!sticky,
    life: sticky === true ? null : (life || 3000),
  }

  toastError.current.show(options);
}

export function ToastCopy(toastCopy, message, sticky, life) {

  /**
 * Affiche un toast avec un message donné.
 *
 * @param {React.MutableRefObject} toastInfo - Référence à l'objet Toast.
 * @param {string} message - Message à afficher dans le toast.
 * @param {boolean} sticky - Si le toast doit être collant.
 * @param {number} life - Durée d'affichage du toast en millisecondes.
 * @returns {void}
 */

  const options = {
    severity: 'success',
    detail: message,
    sticky: !!sticky,
    life: sticky === true ? null : (life || 3000),
  }

  toastCopy.current.show(options);
}

export function ToastWarn(toastWarn, message, sticky, life) {

  /**
 * Affiche un toast avec un message donné.
 *
 * @param {React.MutableRefObject} toastInfo - Référence à l'objet Toast.
 * @param {string} message - Message à afficher dans le toast.
 * @param {boolean} sticky - Si le toast doit être collant.
 * @param {number} life - Durée d'affichage du toast en millisecondes.
 * @returns {void}
 */

  const options = {
    severity: 'warn',
    detail: message,
    sticky: !!sticky,
    life: sticky === true ? null : (life || 3000),
  }

  toastWarn.current.show(options);
}

export function ToastInfo(toastInfo, message, sticky, life) {

  /**
 * Affiche un toast avec un message donné.
 *
 * @param {React.MutableRefObject} toastInfo - Référence à l'objet Toast.
 * @param {string} message - Message à afficher dans le toast.
 * @param {boolean} sticky - Si le toast doit être collant.
 * @param {number} life - Durée d'affichage du toast en millisecondes.
 * @returns {void}
 */

  const options = {
    severity: 'info',
    detail: message,
    sticky: !!sticky,
    life: sticky === true ? null : (life || 3000),
  }

  toastInfo.current.show(options);
}
