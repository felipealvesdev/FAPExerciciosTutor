import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', age: '' });
  const [updateItem, setUpdateItem] = useState({ id: '', name: '', age: '' });

  useEffect(() => {
    axios.get('https://api.example.com/items')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao requisitar os dados:', error);
      });
  }, []);

  const handleAddItem = () => {
    axios.post('https://api.example.com/items', newItem)
      .then(response => {
        console.log('Item adicionado:', response.data);
      })
      .catch(error => {
        console.error('Erro ao adicionar item:', error);
      });
  };

  const handleUpdateItem = () => {
    axios.put(`https://api.example.com/items/${updateItem.id}`, updateItem)
      .then(response => {
        console.log('Item atualizado:', response.data);
      })
      .catch(error => {
        console.error('Erro ao atualizar o item:', error);
      });
  };

  const handleDeleteItem = (id:any) => {
    axios.delete(`https://api.example.com/items/${id}`)
      .then(response => {
        console.log('Item excluído:', response.data);
      })
      .catch(error => {
        console.error('Erro ao deletar o item:', error);
      });
  };

  return (
    <div>
        <h1>Métodos http get, post, put e delete no componente</h1>
    </div>
  );
};

export default Api;
