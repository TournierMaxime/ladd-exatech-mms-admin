/**
 * Gestionnaire d'événements qui met à jour les données d'un état.
 *
 * @param {object} state - L'état à mettre à jour.
 * @returns {Function} - Le gestionnaire d'événements qui met à jour l'état en fonction de l'événement déclenché.
 */

const onChange = (state) => {
  const onChangeHandler = (e) => {
    state.setData({
      ...state.data,
      [e.target.name]: e.target.value,
    });
  };
  return onChangeHandler;
};

/**
 * Gestionnaire d'événements qui met à jour un champ de données imbriqué dans un état.
 *
 * @param {object} state - L'état à mettre à jour.
 * @returns {Function} - Le gestionnaire d'événements qui met à jour l'état en fonction de l'événement déclenché.
 */

const onChangeDataField = (state) => {
  // Crée une fonction de gestionnaire d'événements qui prend en paramètre un événement
  const onChangeHandler = ({ target: { name, value } }) => {
    // Sépare le nom du champ en parties séparées par des points
    const fieldParts = name.split('.');
    // Si le nom du champ contient plus d'une partie (c'est-à-dire s'il s'agit d'un objet imbriqué),
    // met à jour l'état de manière récursive en parcourant les parties du champ de nom et en mettant à jour les données correspondantes
    if (fieldParts.length > 1) {
      let currentData = state.data;
      for (let i = 0; i < fieldParts.length; i++) {
        let field = fieldParts[i];

        if (field.match(/^([1-9][0-9]*|0)$/)) {
          field = parseInt(field);
        }

        if (i < fieldParts.length - 1) {
          if (!currentData[field]) {
            // Si le champ courant n'existe pas, crée-le comme un objet ou un tableau en fonction du type du champ suivant
            const nextField = fieldParts[i + 1];
            if (nextField.match(/^\d+$/)) {
              currentData[field] = [];
            } else {
              currentData[field] = {};
            }
          }
          currentData = currentData[field];
        } else {
          currentData[field] = value;
        }
      }

      state.setData({
        ...state.data,
      });
      // Si le nom du champ ne contient qu'une partie, met à jour l'état en utilisant la syntaxe de tableau d'objets
    } else {
      state.setData({
        ...state.data,
        [name]: value,
      });
    }
  };
  // Renvoie le gestionnaire d'événements créé
  return onChangeHandler;
};

export { onChange, onChangeDataField };