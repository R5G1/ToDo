/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { DataGrid } from '@material-ui/data-grid';

// import Typography from '@material-ui/core/Typography';
import TodoForm from './todo-form';
import TodoList from './todo-list';
import useTodoState from './user-todo';


function DataTable() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log('ERORR', error));
  }, []);

  const removeElem = useCallback(
    (id) => {
      if (data) {
        setData(data.filter((item) => item.id !== id));
      }
    },
    [data]
  );

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'title', headerName: 'Title', width: 430 },
      { field: 'completed',headerName: 'Completed', width: 330 },
      {
        field: 'del',
        width: 100,
        renderCell: (params) => {
          const id = params.row.id;
          return <button onClick={() => removeElem(id)}>Delete</button>;
        },
      },
    ],
    [data]
  );

  if (!data) {
    return null;
  }
  return (
    <div style={{ height: '90vh', width: '100%' }}>
        <TodoForm
        saveTodo={todoText => {
           todoText.trim();
          
        }}
        
      />
      
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={18}
        checkboxSelection
        disableSelectionOnClick
      />
      
    </div>
  );
}
export default DataTable;
