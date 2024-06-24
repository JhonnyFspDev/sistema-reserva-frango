
# Sistema de Reserva de Frango

Um projeto que criei afim de auxiliar nas reservas de frango assado feitas em um comércio do meu bairro. O usuário realiza a reserva inserindo nome e telefone, marca a opção do tipo da reserva e realiza a compra.


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/v1/client
```

#### Retorna um item

```http
  GET /api/client/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do client que você quer |

#### Retorna quantidade de clients

```http
  GET /api/client/qtde
```
#### Adiciona um client

```http
  POST /api/client
```

#### Atualiza o client

```http
  PUT /api/client/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do client que você quer atualizar |

#### Deleta o client

```http
  DELETE /api/client/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do client que você quer deletar |