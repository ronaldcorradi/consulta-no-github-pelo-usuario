import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import {useHistory} from 'react-router-dom'

function App() {
  const [usuario,setUsuario] = useState("");
  const [data,setData] = useState("");
  const history = useHistory();
  const [erro, setErro] = useState(false);
 
  return ( 
    <S.HomeContainer>
      <S.Content>    
        <S.Input className = "usuarioInput" placeholder="Usuário" value={usuario} onChange = {e=> setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg> : ""}
      </S.Content>
    </S.HomeContainer>
  );

  function handlePesquisa(){
   //api do GitHub
   //Devolve todas as informaçãoes do usuário
   //api.github.com/users/nome-do-usuario
   //Devolve todos os repositórios do usuário
   //api.github.com/users/nome-do-usuario/repos
   //Para fazer a requisição, será utilizado o pacote axios
   //Instalar o pacote axios : npm install axios
   //Importar o pacote : import axios from 'axios'
    if(usuario!=""){
      axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response=>{
        const repositorios = response.data;
        const repositoriosName = []; //armarzenar os nomes dos repositórios
        repositorios.map((repositorio)=>{
          repositoriosName.push(repositorio.name);
        })
        //setar um valor no localStorage
        //localStorage("chave",valor)
        localStorage.setItem("repositoriosName",JSON.stringify(repositoriosName));
        setErro(false);
        history.push('./repositories');
      }).catch(err=>{
        setErro(true);
      });
    }else{
      alert('Digite o nome do usuário')
    }
   
  }

}
export default App;