import React, { Fragment, useState } from 'react';
import { Paginator } from 'primereact';

/**
 * Composant pour la pagination des données.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {object} props.pageState - L'état de la pagination.
 * @param {object} props.data - Les données à paginer.
 * @param {object} props.filtersState - L'état des filtres filters, setFilters.
 * @param {array} props.rowsPerPageOptions - Les options de nombre de lignes par page.
 * @returns {React.ReactElement} - Le composant de pagination des données.
 */

export default function DropDownItems({ pageState, data, filtersState, rowsPerPageOptions, filters }) {
  //------------Template pagination
  const template = {
    layout: 'RowsPerPageDropdown',
  };
  //------------Pagination-----------------
  const [init, setInit] = useState(0);

  /**
   * Fonction appelée lors du changement de page.
   *
   * @param {object} event - L'événement de changement de page.
   */

  const onBasicPageChange = (event) => {
    setInit(event.first);
    pageState.setItemsPerPage(event.rows);
    filtersState.setFilters({
      ...filtersState.filters,
      size: event.rows,
    });
    filters.setFiltersType({
      ...filters.filtersType,
      pagination: pageState.itemsPerPage
    })
  };

  return (
    <Fragment>
      <span>
        <Paginator
          totalRecords={data?.items}
          first={init}
          rows={pageState.itemsPerPage}
          pageLinkSize={3}
          template={template}
          onPageChange={onBasicPageChange}
          rowsPerPageOptions={rowsPerPageOptions}
          className='paginatorArrow'
        />
      </span>
    </Fragment>
  );
}
