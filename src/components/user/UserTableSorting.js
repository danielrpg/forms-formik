import { useState, useMemo, useEffect } from "react";
import { CustomerService } from '../../services'
import { TableSort } from '../shared';

function UserTableSorting() {
    const [data, setData] = useState([]);

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'name',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Cellphone',
                        accessor: 'cellphone',
                    },
                    {
                        Header: 'Address',
                        accessor: 'address',
                    },
                    {
                        Header: 'Zip Code',
                        accessor: 'zipCode',
                    },
                ],
            },
        ],
        []
    )
    
    useEffect(() => {
        console.log('is inside effect..');
        async function fetchUserInformation() {
            await CustomerService.getAll()
                .then(resp => {
                   //  console.log(resp.data.customer);
                    const userData = resp.data.customer; 
                    setData(userData);
                })
        }
        fetchUserInformation();
    }, [])


    return (
        <TableSort columns={columns} data={data} />
    );
}

export {UserTableSorting};