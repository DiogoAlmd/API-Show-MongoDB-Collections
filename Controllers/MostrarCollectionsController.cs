using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Linq;

namespace mostrarCollections.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MostrarCollectionsController : ControllerBase
    {
        [HttpGet]
        public dynamic Get() {
            string connectionString = "mongodb://localhost:27017";
            MongoClient cliente = new MongoClient(connectionString);


            string databaseName = "testes";
            string collectionName = "whateverColletion";

            var db = cliente.GetDatabase(databaseName);
            var collection = db.GetCollection<BsonDocument>(collectionName);
            var result = collection.Find(new BsonDocument()).Limit(5).ToList();

            return result.ConvertAll(BsonTypeMapper.MapToDotNetValue);
        }
    }
}
