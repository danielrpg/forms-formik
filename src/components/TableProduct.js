import React from 'react';
import { useTable } from 'react-table';

function ProductTable() {
    const columns = [
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
    ];

    const data = [
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

    ]; 

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })

    return (
        <>
                
                <div className="container" >
                    <h1 className="header"> Product List </h1>
                    <table  className="table" {...getTableProps()}>
                        <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
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

export {ProductTable};