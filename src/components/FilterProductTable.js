import React, { useMemo, useState } from 'react';
import { useAsyncDebounce, useFilters, useGlobalFilter, useTable } from 'react-table';

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {

    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce( value => {
        setGlobalFilter(value || undefined)
    }, 200);

    return (
        <span>
            Search:{' '}
            <input
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </span>
    )
}

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length
  
    return (
      <input
        className="form-control"
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    )
  }

function Table({columns, data}) {
    const defaultColumn = useMemo(
        () => ({
            Filter: DefaultColumnFilter
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
      } = useTable(
          { 
            columns, 
            data,
            defaultColumn
          },
          useFilters,
          useGlobalFilter
        )

        return (
            <>
                    <div className="container" >
                        <h1 className="header"> Product List </h1>
                        <GlobalFilter
                            preGlobalFilteredRows={preGlobalFilteredRows}
                            globalFilter={state.globalFilter}
                            setGlobalFilter={setGlobalFilter}
                        />
                        <table  className="table" {...getTableProps()}>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                            <div> {column.canFilter? column.render('Filter') : null} </div>
                                        </th>
                                    ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row, i) => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                    </table>
                </div>
          </>  
        )
}

function FilterProductTable() {
    const columns = useMemo(
        () => [
            {
                Header: 'Product',
                columns: [
                    {
                        Header: 'Product Name',
                        accessor: 'productName'
                    },{
                        Header: 'Price',
                        accessor: 'productPrice'
                    },
                ],
            },
            {
                Header: 'Description',
                columns: [
                    {
                        Header: 'Unit',
                        accessor: 'productUnit'
                    },{
                        Header: 'Detail',
                        accessor: 'productDetail'
                    },
                ],
            }
        ],
        []
    ) 

    const data = useMemo(
        () => [
            {
                "productName": "Mouse",
                "productPrice": "15",
                "productUnit": "10",
                "productDetail": "Optic Mouse Blue"
            },
            {
                "productName": "Screen",
                "productPrice": "150",
                "productUnit": "10",
                "productDetail": "LCD  Black"
            },
            {
                "productName": "Mouse",
                "productPrice": "15",
                "productUnit": "10",
                "productDetail": "Optic Mouse Blue"
            },
            {
                "productName": "Mouse",
                "productPrice": "15",
                "productUnit": "10",
                "productDetail": "Optic Mouse Blue"
            },
            {
                "productName": "Mouse",
                "productPrice": "15",
                "productUnit": "10",
                "productDetail": "Optic Mouse Blue"
            }
    
        ], 
        []
    )

    return (
        <Table columns={columns} data={data} />
    )
}

export {FilterProductTable};