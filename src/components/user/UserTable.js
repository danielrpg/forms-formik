import { useMemo } from 'react';
import { Table } from '../shared';

function UserTable() {
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
        <div className='container'>
            <h1> List users </h1>
            <Table columns={columns} data={data} />
        </div>
    )
}

export {UserTable};
