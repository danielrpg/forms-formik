import { useMemo } from 'react';
import { TableBasic } from '../shared';

function UserTableBasic() {

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
        <TableBasic columns={columns} data={data} />
    )
}

export {UserTableBasic};