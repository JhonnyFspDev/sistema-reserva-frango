using APIReservaFrango.Domain.Model.ClientAggregate;

namespace APIReservaFrango.Infraestrutura.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly FrangoContext _context = new();
        public void Add(ClientEntity client)
        {
            _context.Add(client);
            _context.SaveChanges();
        }

        public void Delete(ClientEntity client)
        {
            _context.Remove(client);
            _context.SaveChanges();
        }

        public List<ClientEntity> Get()
        {
            return _context.Clientes.ToList();
        }
        public ClientEntity GetById(int id)
        {
            var clientId = _context.Clientes.FirstOrDefault(x => x.Id == id);
            return clientId;
        }
        public void Update(int id, ClientEntity client)
        {
            _context.Update(client);
            _context.SaveChanges();
        }
    }
}
