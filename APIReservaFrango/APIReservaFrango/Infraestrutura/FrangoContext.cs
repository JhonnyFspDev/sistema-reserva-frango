using APIReservaFrango.Domain.Model.ClientAggregate;
using Microsoft.EntityFrameworkCore;

namespace APIReservaFrango.Infraestrutura
{
    public class FrangoContext : DbContext
    {
        public FrangoContext()
        {
            
        }

        public DbSet<ClientEntity> Clientes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Initial Catalog=frango_assado_api;Integrated Security=true; TrustServerCertificate=true"));
        }
    }
}
