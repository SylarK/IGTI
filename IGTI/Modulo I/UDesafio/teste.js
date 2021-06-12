const temp = [
  {
    "id": 1,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 2,
    "cliente": "Tália Simas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 3,
    "cliente": "Tália Simas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 4,
    "cliente": "Bento Torcato",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 5,
    "cliente": "Quirina Teves",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 6,
    "cliente": "Magali Simas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 7,
    "cliente": "Quirino Barra",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 8,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 9,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 10,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 11,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 12,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 13,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 14,
    "cliente": "Virgílio Pádua",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 15,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 16,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 17,
    "cliente": "Francisca Azenha",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 18,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 19,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 20,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 21,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 22,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 23,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 24,
    "cliente": "Francisca Azenha",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 25,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 26,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 27,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 28,
    "cliente": "Tália Simas",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 29,
    "cliente": "Judite Eiró",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 30,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 31,
    "cliente": "Judite Eiró",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 32,
    "cliente": "Martinho Feitosa",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 33,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 34,
    "cliente": "Quirino Barra",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 35,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 36,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 37,
    "cliente": "Félix Salomón",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 38,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 39,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 40,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 41,
    "cliente": "Quirino Barra",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 42,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 43,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 44,
    "cliente": "Júlia Filipe",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 45,
    "cliente": "Martinho Feitosa",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 46,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 47,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 48,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 49,
    "cliente": "Aniano Salles",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 50,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 51,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 52,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 53,
    "cliente": "Aniano Salles",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 54,
    "cliente": "Bento Torcato",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 55,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 56,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 57,
    "cliente": "Gustavo Simão",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 58,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 59,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 60,
    "cliente": "Aida Castelo Branco",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 61,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 62,
    "cliente": "Ondina Rua",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 63,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 64,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 65,
    "cliente": "Martinho Feitosa",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 66,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 67,
    "cliente": "Bento Boga",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 68,
    "cliente": "Simão Zarco",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 69,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 70,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 71,
    "cliente": "Romano Lopes",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 72,
    "cliente": "Salvina Varejão",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 73,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 74,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 75,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 76,
    "cliente": "Quirina Teves",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 77,
    "cliente": "Rosaura Azenha",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 78,
    "cliente": "Quirina Teves",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 79,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 80,
    "cliente": "Agostinho Faro",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 81,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 82,
    "cliente": "Gustavo Simão",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 83,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 84,
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 85,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 86,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 87,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 88,
    "cliente": "Clara Bragança",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 89,
    "cliente": "Ondina Rua",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 90,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 91,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 92,
    "cliente": "Aniano Salles",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 93,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 94,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 95,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.765Z"
  },
  {
    "id": 96,
    "cliente": "Nilza Martinho",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 97,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 98,
    "cliente": "Francisca Azenha",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 99,
    "cliente": "Bento Torcato",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 100,
    "cliente": "Tália Simas",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 101,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 102,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 103,
    "cliente": "Clara Bragança",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 104,
    "cliente": "Tália Simas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 105,
    "cliente": "Valéria Pádua",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 106,
    "cliente": "Quirina Teves",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 107,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 108,
    "cliente": "Rosaura Azenha",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 109,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 110,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 111,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 112,
    "cliente": "Ruca Varejão",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 113,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 114,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 115,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 116,
    "cliente": "Magali Simas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 117,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 118,
    "cliente": "Romano Lopes",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 119,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 120,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 121,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 122,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 123,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 124,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 125,
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 126,
    "cliente": "Tália Simas",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 127,
    "cliente": "Clara Bragança",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 128,
    "cliente": "Tália Simas",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 129,
    "cliente": "Rosaura Azenha",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 130,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 131,
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 132,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 133,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 134,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 135,
    "cliente": "Aniano Salles",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 136,
    "cliente": "Ruca Varejão",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 137,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 138,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 139,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 140,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 141,
    "cliente": "Veríssimo Canadas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 142,
    "cliente": "Félix Salomón",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 143,
    "cliente": "Júlia Filipe",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 144,
    "cliente": "Aida Castelo Branco",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 145,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 146,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 147,
    "cliente": "Dinis Thamily",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 148,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 149,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 150,
    "cliente": "Quirino Barra",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 151,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 152,
    "cliente": "Romano Lopes",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 153,
    "cliente": "Bento Boga",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 154,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 155,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 156,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 157,
    "cliente": "Martinho Feitosa",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 158,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 159,
    "cliente": "Sancha Pais",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 160,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 161,
    "cliente": "Quirino Barra",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 162,
    "cliente": "Sancha Pais",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 163,
    "cliente": "Bento Torcato",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 164,
    "cliente": "Bento Boga",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 165,
    "cliente": "Veríssimo Canadas",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 166,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 167,
    "cliente": "Veríssimo Canadas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 168,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 169,
    "cliente": "Salvina Varejão",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 170,
    "cliente": "Agostinho Faro",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 171,
    "cliente": "Judite Eiró",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 172,
    "cliente": "Agostinho Faro",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 173,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 174,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 175,
    "cliente": "Aniano Salles",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 176,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 177,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 178,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 179,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 180,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 181,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 182,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 183,
    "cliente": "Júlia Filipe",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 184,
    "cliente": "Sancha Pais",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 185,
    "cliente": "Ondina Rua",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 186,
    "cliente": "Quirina Teves",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 187,
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 188,
    "cliente": "Bento Torcato",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 189,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 190,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 191,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 192,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 193,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 194,
    "cliente": "Tália Simas",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 195,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 196,
    "cliente": "Ondina Rua",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 197,
    "cliente": "Félix Salomón",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 198,
    "cliente": "Martinho Feitosa",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 199,
    "cliente": "Quirino Barra",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 200,
    "cliente": "Salvina Varejão",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 201,
    "cliente": "Teresina Almeida",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 202,
    "cliente": "Bento Torcato",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 203,
    "cliente": "Gustavo Simão",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 204,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 205,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 206,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 207,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 208,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 209,
    "cliente": "Simão Zarco",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 210,
    "cliente": "Salvina Varejão",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 211,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 212,
    "cliente": "Martinho Feitosa",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 213,
    "cliente": "Júlia Filipe",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 214,
    "cliente": "Francisca Azenha",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 215,
    "cliente": "Ondina Rua",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 216,
    "cliente": "Virgílio Pádua",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 217,
    "cliente": "Francisca Azenha",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 218,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 219,
    "cliente": "Clara Bragança",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 220,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 221,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 222,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 223,
    "cliente": "Bento Boga",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 224,
    "cliente": "Veríssimo Canadas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 225,
    "cliente": "Gustavo Simão",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 226,
    "cliente": "Aniano Salles",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 227,
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 228,
    "cliente": "Aida Castelo Branco",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 229,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 230,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 231,
    "cliente": "Aniano Salles",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 232,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 233,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 234,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 235,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 236,
    "cliente": "Magali Simas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 237,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 238,
    "cliente": "Bento Boga",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 239,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 240,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 241,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 242,
    "cliente": "Aniano Salles",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 243,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 244,
    "cliente": "Salvina Varejão",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 245,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 246,
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 247,
    "cliente": "Ondina Rua",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 248,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 249,
    "cliente": "Judite Eiró",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 250,
    "cliente": "Magali Simas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 251,
    "cliente": "Salvina Varejão",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 252,
    "cliente": "Virgílio Pádua",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 253,
    "cliente": "Nilza Martinho",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 254,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 255,
    "cliente": "Ondina Rua",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 256,
    "cliente": "Simão Zarco",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 257,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 258,
    "cliente": "Políbio Bragança",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 259,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 260,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 261,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 262,
    "cliente": "Dinis Thamily",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 263,
    "cliente": "Ondina Rua",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 264,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 265,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 266,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 267,
    "cliente": "Quirina Teves",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 268,
    "cliente": "Romano Lopes",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 269,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 270,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 271,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 272,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 273,
    "cliente": "Quirina Teves",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 274,
    "cliente": "Aniano Salles",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 275,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 276,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 277,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 278,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 279,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 280,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 281,
    "cliente": "Rosaura Azenha",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 282,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 283,
    "cliente": "Bento Boga",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 284,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 285,
    "cliente": "Simão Zarco",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 286,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 287,
    "cliente": "Tália Simas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 288,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 289,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 290,
    "cliente": "Quirina Teves",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 291,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 292,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 293,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 294,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 295,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 296,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 297,
    "cliente": "Judite Eiró",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 298,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 299,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 300,
    "cliente": "Clara Bragança",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 301,
    "cliente": "Clara Bragança",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 302,
    "cliente": "Félix Salomón",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 303,
    "cliente": "Agostinho Faro",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 304,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 305,
    "cliente": "Francisca Azenha",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 306,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 307,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 308,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 309,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 310,
    "cliente": "Rosaura Azenha",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 311,
    "cliente": "Veríssimo Canadas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 312,
    "cliente": "Salvina Varejão",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 313,
    "cliente": "Agostinho Faro",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 314,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 315,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 316,
    "cliente": "Nilza Martinho",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 317,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 318,
    "cliente": "Bento Torcato",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 319,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 320,
    "cliente": "Quirina Teves",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 321,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 322,
    "cliente": "Ondina Rua",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 323,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 324,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 325,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 326,
    "cliente": "Romano Lopes",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 327,
    "cliente": "Quirina Teves",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 328,
    "cliente": "Romano Lopes",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 329,
    "cliente": "Quirina Teves",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 330,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 331,
    "cliente": "Veríssimo Canadas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 332,
    "cliente": "Magali Simas",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 333,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 334,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 335,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 336,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 337,
    "cliente": "Sancha Pais",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 338,
    "cliente": "Félix Salomón",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 339,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 340,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 341,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 342,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 343,
    "cliente": "Rosaura Azenha",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 344,
    "cliente": "Magali Simas",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 345,
    "cliente": "Quirino Barra",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 346,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 347,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 348,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 349,
    "cliente": "Bento Boga",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 350,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 351,
    "cliente": "Simão Zarco",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 352,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 353,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 354,
    "cliente": "Romano Lopes",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 355,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 356,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 357,
    "cliente": "Quirina Teves",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 358,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 359,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.766Z"
  },
  {
    "id": 360,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 361,
    "cliente": "Aniano Salles",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 362,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 363,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 364,
    "cliente": "Francisca Azenha",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 365,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 366,
    "cliente": "Ondina Rua",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 367,
    "cliente": "Clara Bragança",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 368,
    "cliente": "Clara Bragança",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 369,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 370,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 371,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 372,
    "cliente": "Júlia Filipe",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 373,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 374,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 375,
    "cliente": "Aniano Salles",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 376,
    "cliente": "Judite Eiró",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 377,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 378,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 379,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 380,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 381,
    "cliente": "Virgílio Pádua",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 382,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 383,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 384,
    "cliente": "Emiliana Vilalobos",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 385,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 386,
    "cliente": "Clara Bragança",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 387,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 388,
    "cliente": "Simão Zarco",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 389,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 390,
    "cliente": "Cleiton Raposo",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 391,
    "cliente": "Quirino Barra",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 392,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 393,
    "cliente": "Virgílio Pádua",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 394,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 395,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 396,
    "cliente": "Rosaura Azenha",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 397,
    "cliente": "Salvina Varejão",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 398,
    "cliente": "Aniano Salles",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 399,
    "cliente": "Aida Castelo Branco",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 400,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 401,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 402,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 403,
    "cliente": "Quirina Teves",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 404,
    "cliente": "Clara Bragança",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 405,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 406,
    "cliente": "Aniano Salles",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 407,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 408,
    "cliente": "Quirina Teves",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 409,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 410,
    "cliente": "Veríssimo Canadas",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 411,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 412,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 413,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 414,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 415,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 416,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 417,
    "cliente": "Aida Castelo Branco",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 418,
    "cliente": "Romano Lopes",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 419,
    "cliente": "Agostinho Faro",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 420,
    "cliente": "Júlia Filipe",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 421,
    "cliente": "Clara Bragança",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 422,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 423,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 424,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 425,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 426,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 427,
    "cliente": "Félix Salomón",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 428,
    "cliente": "Iraci Dorneles",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 429,
    "cliente": "Agostinho Faro",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 430,
    "cliente": "Simão Zarco",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 431,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 432,
    "cliente": "Agostinho Faro",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 433,
    "cliente": "Ondina Rua",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 434,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 435,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 436,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 437,
    "cliente": "Tália Simas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 438,
    "cliente": "Daniel Pedroso",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 439,
    "cliente": "Francisca Azenha",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 440,
    "cliente": "Magali Simas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 441,
    "cliente": "Bento Torcato",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 442,
    "cliente": "Clara Bragança",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 443,
    "cliente": "Clara Bragança",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 444,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 445,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 446,
    "cliente": "Ondina Rua",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 447,
    "cliente": "Quirina Teves",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 448,
    "cliente": "Tânia Cardoso",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 449,
    "cliente": "Clara Bragança",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 450,
    "cliente": "Nilza Martinho",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 451,
    "cliente": "Bento Boga",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 452,
    "cliente": "Lília Velázquez",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 453,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 454,
    "cliente": "Clotilde Godoy",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 455,
    "cliente": "Magali Simas",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 456,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 457,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 458,
    "cliente": "Clara Bragança",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 459,
    "cliente": "Tália Simas",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 460,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 461,
    "cliente": "Lavínia Dâmaso",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 462,
    "cliente": "Clara Bragança",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 463,
    "cliente": "Quirino Barra",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 464,
    "cliente": "Virgílio Pádua",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 465,
    "cliente": "Francisca Azenha",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 466,
    "cliente": "Luize Alcoforado",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 467,
    "cliente": "Bento Torcato",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 468,
    "cliente": "Ruca Varejão",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 469,
    "cliente": "Nilza Martinho",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 470,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 471,
    "cliente": "Virgílio Pádua",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 472,
    "cliente": "Nilza Martinho",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 473,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 474,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 475,
    "cliente": "Teresina Almeida",
    "produto": "Pizza a Moda",
    "valor": 31,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 476,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 477,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 478,
    "cliente": "Porfírio Fitas",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 479,
    "cliente": "Quirino Barra",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 480,
    "cliente": "Dinis Thamily",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 481,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 482,
    "cliente": "Corina Quinzeiro",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 483,
    "cliente": "Políbio Bragança",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 484,
    "cliente": "Quirina Teves",
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 485,
    "produto": "Pizza Muçarela",
    "valor": 26,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 486,
    "cliente": "Oscar   Gaspar",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 487,
    "cliente": "Bento Boga",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 488,
    "cliente": "Ricardo Pirajá",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 489,
    "cliente": "Heloísa Sobreira",
    "produto": "Pizza Napolitana",
    "valor": 28,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 490,
    "cliente": "Teresina Almeida",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": false,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 491,
    "cliente": "Tália Simas",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 492,
    "cliente": "Aida Castelo Branco",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 493,
    "cliente": "Belmiro Chagas",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 494,
    "cliente": "Félix Salomón",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 495,
    "cliente": "Gedeão Saloio",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 496,
    "cliente": "Quintiliana Palha",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 497,
    "cliente": "Godofredo Brandán",
    "produto": "Pizza Calabresa",
    "valor": 30.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 498,
    "cliente": "Apoena Acatauaçu",
    "produto": "Pizza Pepperoni",
    "valor": 32.5,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 499,
    "cliente": "Quirino Barra",
    "produto": "Pizza Frango com Catupiry",
    "valor": 29,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  },
  {
    "id": 500,
    "cliente": "Valéria Pádua",
    "produto": "Pizza Atum",
    "valor": 32,
    "entregue": true,
    "timestamp": "2021-05-02T19:48:09.767Z"
  }
]

const lista = []

//const response = temp.filter(p => p.produto == 'Pizza Atum' && p.entregue == true).map(p => { "Produto" = p.produto })
//const response = temp.filter(p => p.cliente == 'Rosaura Azenha' && p.entregue == true).map(p => p.valor).reduce((prev, curr) => prev + curr, 0);
const response = temp.filter(p => p.produto == 'Pizza Atum' && p.entregue == true).map(p => p.valor).reduce((prev, curr) => prev + curr, 0);
//pedidos.filter((p) => p.cliente && (p.cliente === nomeCliente && p.entregue)).map(p => p.valor).reduce((prev, curr) => prev + curr, 0);

console.log(response);

// const pedidos = await PedidoRepository.getPedidos();
// const lista = [];
// pedidos.filter(p => p.entregue).forEach(p => {
//   const index = lista.findIndex(it => it.produto === p.produto);
//   if (index === -1) {
//     lista.push({ produto: p.produto, quantidade: 1 });
//   } else {
//     lista[index].quantidade++;
//   }
// });
// lista.sort((a, b) => b.quantidade - a.quantidade)
// return lista.map(p => `${p.produto} - ${p.quantidade}`);
