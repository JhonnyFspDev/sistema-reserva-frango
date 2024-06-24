using APIReservaFrango.Domain.Model.Enum;

namespace APIReservaFrango.Application.ViewModel
{
    public class ClientViewModel
    {
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public bool PedidoEntregue { get; set; } = false;
        public EnumStatusCompra StatusCompra { get; set; }
    }
}
