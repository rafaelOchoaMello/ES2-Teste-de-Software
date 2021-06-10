<h1 align="center">Engenharia de Software II - Teste de Software </h1>
<p align="center"> Rafael Ochôa Mello - rafaelochoamello@gmail.com </p>

<p align="center">
 <a href="#sobre">Projeto base</a> •
 <a href="#objetivo">Objetivo</a> • 
 <a href="#testes">Testes realizados</a> • 
</p>

<p id="sobre">
  <h2> :memo: Sobre </h2>
  <p> Este trabalho de testes para a cadeira de Engenharia de Software II fora 
      construido sobre a base do trabalho de Programação para Internet II. 
   </p>
   <p>
      No mesmo, há uma relação entre 4 tabelas (Usuários, Produtos, Tipo Produtos e Agendamentos),
      como também middlewares para determinadas rotas e validações via JWT.
   </p>
</p>

<p id="objetivo">
 <h2> :bow_and_arrow: Objetivo </h2>
  <p> O objetivo do trabalho era realizar uma série de testes conforme conteúdo apresentado em aula,
      sendo estes, focados na tabela de produtos. 
   </p>
   <p>
      Foram verificadas inserções, remoções, atualizações, bem como a impossibilidade dos mesmos 
      quando recebidos dados considerados inadequados. Também foram tratadas as questões de 
      validações dos tokens recebidos para as rotas em que isso se fazia necessário.
   </p>
   <p>
     Inicialmente, também seriam realizados testes nos agendamentos, mas uma vez que estes são 
     virtualmente idênticos aqueles realizados em produtos, sendo pra falar a verdade, até mais 
     simples. Por este motivo, a implementação dos mesmos fora descontinuada.
   </p>
</p>

<p id="testes">
    <h2> :mag_right: Testes </h2>
    <p> De forma mais precisa, os testes realizados foram: </p>
    <h4>Impossibilidades</h4>
    <ul>
      <li>Não deve ser possível acessar um produto de id inválido</li>
      <li>Não deve ser possível remover um produto de id inválido'</li>
      <li>Não deve ser possível alterar um produto de id inválido</li>
      <li>Não deve ser possível criar um produto de tipo inválido</li>       
    </ul>    
    <h4>Possibilidades</h4>
    <ul>
      <li>Deve ser possível acessar um produto de id válido</li>
      <li>Deve ser possível listar todos os produtos</li>
      <li>Deve ser possível criar um produto</li>
      <li>Deve ser possível atualizar um produto</li>  
      <li>Deve ser possível remover um produto</li>  
    </ul>
    
</p>
