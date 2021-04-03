import { useState, useMemo, useEffect } from "react";
import { TablePagination } from '../shared';
import { CustomerService } from '../../services'

function UserTablePaginationAPI() {

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
                    console.log(resp.data.customer);
                    const userData = resp.data.customer; 
                    setData(userData);
                })
        }
        fetchUserInformation();
    }, [])
    //const data = React.useMemo(() => makeData(100000), [])
 
    return (
        <div className='container'>
            <h1> List Users from API </h1>
            <TablePagination columns={columns} data={data} />
        </div>
        
    );
}

export { UserTablePaginationAPI }
