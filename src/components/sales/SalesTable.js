import { Table } from '../shared';

function SalesTable ({columns, data}) {
    return (
        <div className='container'>
            <Table columns={columns} data={data} />
        </div>
    )
}

export {SalesTable};
