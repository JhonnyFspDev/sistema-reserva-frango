using APIReservaFrango.Domain.Model.Enum;
using System.ComponentModel.DataAnnotations;

namespace APIReservaFrango.Domain.Model.ClientAggregate
{
    public class ClientEntity
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public bool PedidoEntregue { get; set; } = false;
        public DateTime Date { get; set; }  = DateTime.UtcNow;
        public EnumStatusCompra StatusCompra { get; set; }
        public ClientEntity(string nome, string telefone, bool pedidoEntregue, EnumStatusCompra statusCompra)
        {
            Nome = nome;
            Telefone = telefone;
            PedidoEntregue = pedidoEntregue;
            StatusCompra = statusCompra;
        }

    }
}
