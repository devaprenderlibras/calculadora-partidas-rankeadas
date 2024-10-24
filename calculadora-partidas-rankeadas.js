// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularSaldoERanque(vitorias, derrotas) {
    // Calcula o saldo (vitórias - derrotas)
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível do jogador com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna uma mensagem com o saldo de vitórias e o nível
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
const vitorias = 45;
const derrotas = 15;
const resultado = calcularSaldoERanque(vitorias, derrotas);

// Exibe o resultado
console.log(resultado);
