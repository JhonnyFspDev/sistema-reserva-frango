export type Client = {
  id: number;
  nome: string;
  telefone: string;
  pedidoEntregue?: boolean;
  statusCompra: string;
}

export type ClientCadastro = Omit<Client, 'id'>;
