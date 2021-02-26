import React, { useContext, useEffect } from 'react';
import { Table } from 'reactstrap';
import { Context } from '../Store/appContext';

const Table1 = (props) => {

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getallUsers();
    console.log(store.allusers)
  }, [])

  return (
    <Table className="text-white">
      <thead>
        <tr>
          <th>id</th>
          <th>Usuario</th>
          <th>Tipo de Usuario</th>
        </tr>
      </thead>
      <tbody>
        {
          !!store.allusers && store.allusers.map((users, i) => {
            return (
              <tr>
                <th scope="row">{users.id}</th>
                <td>{users.username}</td>
                <td>{users.type_user}</td>
                
              </tr>
            )
          })
        }


      </tbody>
    </Table>
  );
}

export default Table1;