import json

def process_string(input_string):
    # Inicializa variáveis
    is_palindrome = False
    char_count = {}

    # Remove espaços e converte para minúsculas
    cleaned_string = input_string.replace(" ", "").lower()

    # Verifica se a string limpa é um palíndromo
    if cleaned_string == cleaned_string[::-1]:
        is_palindrome = True

    # Conta as ocorrências de cada caractere
    for char in cleaned_string:
        char_count[char] = char_count.get(char, 0) + 1

    # Cria o dicionário de saída
    output = {
        "palindromo": is_palindrome,
        "ocorrencias_caracteres": char_count
    }

    return output

# Exemplo de string de entrada
input_string = input("Qual palavra você quer analisar? ")

#Processa a string de entrada
result = process_string(input_string)

# Imprime o resultado
print(json.dumps(result, indent=4))