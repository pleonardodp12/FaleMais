curl --location --request POST 'http://localhost:3001/tarifa' \
--header 'Content-Type: application/json' \
--data-raw '{
    "duracao": 80,
    "dddOrigem": "011",
    "dddDestino": "017",
    "plano": {
        "nome": "FaleMais60",
        "franquia": 60
    }
}'