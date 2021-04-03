import { FilterProductTable, FormFormik, ProductTable, SignupForm, TableCustomer } from './components'
import { SalesTable } from './components/sales'
import { UserTable, UserTablePagination, UserTablePaginationAPI, UserTableSorting } from './components/user'
import { UserTableBasic } from './components/user/UserTableBasic'

function App() {
  return (
    <div className="App">
      {/* <SignupForm /> */}
      <FormFormik />
      {/* <UserTableBasic /> */}
      {/* <UserTableSorting /> */}
      {/* <UserTablePagination /> */}
      <UserTablePaginationAPI />
      {/* <UserTable /> */}
      {/* <SalesTable columns={{ header:'Ventas', accessor: 'codeSales'}} data={{codeSales:'VENT-012453'}} /> */}
      {/* <FilterProductTable /> */}
      {/* <ProductTable /> */}
      {/* <TableCustomer /> */}
      {/* <Form onSubmit={value => {
                console.log(value)
              }}
      /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
