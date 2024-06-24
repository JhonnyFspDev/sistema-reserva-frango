using APIReservaFrango.Application.ViewModel;
using APIReservaFrango.Domain.Model.ClientAggregate;
using Microsoft.AspNetCore.Mvc;

namespace APIReservaFrango.Controllers
{
    [ApiController]
    [Route("/api/v1/client")]
    public class ClientController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;

        public ClientController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository ?? throw new ArgumentNullException(nameof(clientRepository));
        }

        [HttpGet]
        public IActionResult Get()
        {
            var client = _clientRepository.Get();
            return Ok(client);
        }

        //Retornar por Id
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var clientId = _clientRepository.GetById(id);

            return Ok(clientId);
        }

        [HttpGet("qtde")]
        public IActionResult GetQuantity()
        {
            var client = _clientRepository.Get().Count;
            return Ok(client);
        }

        [HttpPost]
        public IActionResult Add(ClientViewModel clientView)
        {
            var client = new ClientEntity(clientView.Nome, clientView.Telefone, clientView.PedidoEntregue, clientView.StatusCompra);
            _clientRepository.Add(client);

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ClientViewModel clientView)
        {
            var clientId = _clientRepository.GetById(id);

            clientId.Nome = clientView.Nome;
            clientId.Telefone = clientView.Telefone;
            clientId.PedidoEntregue = clientView.PedidoEntregue;
            clientId.StatusCompra = clientView.StatusCompra;
            clientId.Date = DateTime.UtcNow;

            _clientRepository.Update(id, clientId);
            
            return Ok(clientId);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var clientId = _clientRepository.GetById(id);

            if(clientId == null)
                return NotFound();

            _clientRepository.Delete(clientId);

            return NoContent();

        }

    }
}
