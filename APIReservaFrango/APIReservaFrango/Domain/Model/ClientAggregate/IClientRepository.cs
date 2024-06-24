namespace APIReservaFrango.Domain.Model.ClientAggregate
{
    public interface IClientRepository
    {
        void Add(ClientEntity client);
        List<ClientEntity> Get();
        void Delete(ClientEntity client);
        ClientEntity GetById(int id);
        void Update(int id, ClientEntity client);
        
    }
}
