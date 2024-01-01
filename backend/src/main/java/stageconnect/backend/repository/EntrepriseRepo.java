package stageconnect.backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import stageconnect.backend.model.Entreprise;


public interface EntrepriseRepo extends MongoRepository<Entreprise, ObjectId> {


}
