const btnConectar = document.getElementById("btnConectar");
const spanConta = document.getElementById("conta");
const spanSaldo = document.getElementById("saldo");

let provider;
let signer;

async function atualizarSaldo(conta) {
  const saldoWei = await provider.getBalance(conta);
  spanSaldo.innerText = ethers.formatEther(saldoWei);
}


btnConectar.onclick = async () => {

    if (window.ethereum === undefined) {
    alert("MetaMask n o encontrada!");
    return;
}

// Pedir permiss o para acessar as contas
const contas = await window.ethereum.request({
method: "eth_requestAccounts"
});

const conta = contas[0];
spanConta.innerText = conta;

// Criar provider e signer a partir da MetaMask
provider = new ethers.BrowserProvider(window.ethereum);
signer = await provider.getSigner();


await atualizarSaldo(conta); // 👈 AQUI

criarInstanciaContrato();
atualizarNumeroAtual();
};

// Substitua pelos dados reais do seu contrato
const enderecoContrato = "0xcbFE5BDfb2A1240B02AF9c509f22593677187e3D";

const abiContrato = [
    "function definirNumero(uint256 _novoNumero) public",
    "function lerNumero() public view returns (uint256)"
];

let contrato;

// Depois de criar o signer ( a p s conectar MetaMask)
function criarInstanciaContrato() {
    contrato = new ethers.Contract(
        enderecoContrato,
        abiContrato,
        signer
    );
}

const btnDefinir = document.getElementById("btnDefinir");
const inputNumero = document.getElementById("novoNumero");
const spanNumeroAtual = document.getElementById("numeroAtual");

async function atualizarNumeroAtual() {
    const valor = await contrato.lerNumero();
    spanNumeroAtual.innerText = valor.toString();
}

btnDefinir.onclick = async () => {
    const valor = inputNumero.value;
    const tx = await contrato.definirNumero(valor);
    await tx.wait(); // espera T ser minerada
    await atualizarNumeroAtual();
    await atualizarSaldo(spanConta.innerText);
};