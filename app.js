const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/manipulacao-string', (req, res) => {
    const texto = req.body.texto;
    
    // Verifica se a string é um palíndromo
    const isPalindrome = (str) => {
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    // Conta o número de cada caractere na string
    const countOccurrences = (str) => {
        const occurrences = {};
        for (let char of str) {
            occurrences[char] = (occurrences[char] || 0) + 1;
        }
        return occurrences;
    };

    const resultado = {
        palindromo: isPalindrome(texto),
        ocorrencias_caracteres: countOccurrences(texto)
    };

    res.json(resultado);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
