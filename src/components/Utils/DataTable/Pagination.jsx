import React, { Fragment, useState } from 'react';
import { Paginator } from 'primereact';
import DropDownItems from './DropDownItems.jsx';
import NumberWithCommas from '../NumberWithCommas.js';

/**
* Composant de pagination.
* @param {object} props - L'objet props.
* @param {object} props.pageState - L'état de la pagination currentPage, setCurrentPage, itemsPerPage, setItemsPerPage.
* @param {object} props.data - Les données à paginer.
* @param {object} props.filtersState - L'état des filtres filters, setFilters.
* @param {array} props.rowsPerPageOptions - Les options pour le nombre de lignes par page.
* @returns {React.ReactElement} Le composant Pagination.
*/

export default function Pagination({ pageState, data, filtersState, rowsPerPageOptions, filters }) {
  //------------Template pagination
  const template = {
    layout:
      'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  };

  const templateResult = {
    layout: 'CurrentPageReport',
      CurrentPageReport: (options) => {
      return (
        <span
          style={{
            color: 'var(--text-color)',
            userSelect: 'none',
            textAlign: 'center',
          }}
        >
          &nbsp;Résultat {options.first} à {options.last} sur{' '}
          {NumberWithCommas(options.totalRecords)} résultats
        </span>
      );
    },
  };
  //------------Pagination-----------------
  const [init, setInit] = useState(0);
  const onBasicPageChange = (event) => {
    setInit(event.first);
    pageState.setItemsPerPage(event.rows);
    pageState.setCurrentPage(event.page + 1);
    filtersState.setFilters({
      ...filtersState.filters,
      page: event.page + 1,
      size: event.rows,
    });
  };
  return (
    <Fragment>
      {data?.results === undefined ? (
        <DropDownItems
          data={data}
          pageState={pageState}
          filtersState={filtersState}
          rowsPerPageOptions={rowsPerPageOptions}
          filters={filters}
        />
      ) : (
        <span>
          <Paginator
            totalRecords={data?.results}
            first={init}
            rows={pageState.itemsPerPage}
            pageLinkSize={3}
            template={template}
            onPageChange={onBasicPageChange}
            rowsPerPageOptions={rowsPerPageOptions}
            className='paginatorArrow'
          />
          <Paginator
            totalRecords={data?.results}
            first={init}
            rows={pageState.itemsPerPage}
            template={templateResult}
            className='paginatorResult'
          />
        </span>
      )}
    </Fragment>
  );
}
