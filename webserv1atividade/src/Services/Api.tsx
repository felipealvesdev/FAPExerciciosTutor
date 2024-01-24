import axios from "axios";

import React, { useEffect, useState } from 'react'

export default function Api() {

  const [item, setItem ] = useState();
    
    
    useEffect(()=>{
        const instance = axios.create({
            baseURL: 'https://some-domain.com/api/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });


        
    },[]) 


    // REQUISICAO GET
    useEffect(() => {
      axios.get('https://api.example.com/items')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);


    // REQUISICAO POST
    useEffect(() => {
      axios.post('https://api.example.com/items', item)
      .then(response => {
        console.log('Item adicionado:', response.data);
      })
      .catch(error => {
        // handle error
        console.error('Erro ao adicionar o item:', error);
      });
    }, []);

  return (
    <div>
        
    <h1>Componente Api</h1> 
    </div>
  )
}
