# calculadora-partidas-rankeadas

Aqui está um exemplo de como a função para a Calculadora de partidas Rankeadas pode ser implementada em Python:

def calcular_nivel(vitorias, derrotas):
    # Calcula o saldo de vitórias
    saldo_vitorias = vitorias - derrotas

    # Determina o nível com base na quantidade de vitórias
    if vitorias < 10:
        nivel = "Ferro"
    elif 11 <= vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"

    # Exibe a mensagem com o saldo de vitórias e o nível do jogador
    print(f"O Herói tem de saldo de {saldo_vitorias} está no nível de {nivel}")

# Exemplo de uso
vitorias = int(input("Digite a quantidade de vitórias: "))
derrotas = int(input("Digite a quantidade de derrotas: "))

calcular_nivel(vitorias, derrotas)

# Explicação
1. Função calcular_nivel(vitorias, derrotas): Esta função recebe o número de vitórias e derrotas como parâmetros e calcula o saldo.
2. Cálculo do saldo de vitórias: O saldo é obtido subtraindo as derrotas das vitórias.
3. Determinação do nível: O nível do jogador é definido com base nas vitórias, seguindo as faixas especificadas.
4. Saída: A mensagem final é exibida com o saldo e o nível correspondente.
