# Integração com MetaMask

Este projeto demonstra uma DApp simples que se conecta à MetaMask, interage com um smart contract e exibe informações da carteira do usuário utilizando ethers.js.

O fluxo da aplicação segue esta ordem:
1. Conexão da carteira
2. Leitura do estado inicial do contrato
3. Envio de uma transação para atualizar o contrato
4. Atualização do saldo da carteira após o gasto de gas

<div align="center">
  <img src="/assets/foto1.png" width="600">
</div>



## 1. Conexão da carteira

Ao clicar em Conectar MetaMask, a aplicação solicita permissão para acessar a carteira do usuário.  
Após a autorização, o endereço da conta conectada é exibido na interface.

Neste momento, também são criados o provider e o signer, que permitem à aplicação se comunicar com a blockchain e assinar transações.

<div align="center">
  <img src="/assets/foto2.png" width="600">
</div>



## 2. Leitura do número armazenado no contrato

Com a carteira conectada, a aplicação cria a instância do smart contract e executa a função lerNumero().

O valor retornado representa o estado atual armazenado no contrato e é exibido na tela como Número atual.

<div align="center">
  <img src="/assets/foto4.png" width="600">
</div>



## 3. Atualização do número via transação

O usuário pode inserir um novo valor e clicar em Definir Número.  
Essa ação envia uma transação para a blockchain chamando a função definirNumero() do contrato.

A MetaMask exibe a solicitação de transação, incluindo a estimativa de taxa de rede (gas).

<div align="center">
  <img src="/assets/foto3.png" width="600">
</div>

Após a confirmação e mineração da transação, o número armazenado no contrato é atualizado e a interface reflete o novo valor.

<div align="center">
  <img src="/assets/foto5.png" width="600">
</div>



## 4. Visualização do saldo da carteira

Foi implementada uma funcionalidade para exibir o saldo da carteira conectada em ETH.

O saldo é obtido diretamente da blockchain por meio do provider, convertido de wei para ETH e exibido na interface.  
Após cada transação, o saldo é atualizado para refletir o gasto de gas ocorrido na operação.



## Observação

O código foi mantido propositalmente simples, priorizando a clareza do fluxo básico de funcionamento de uma DApp: conexão da carteira, leitura de estado, envio de transação e atualização da interface.
