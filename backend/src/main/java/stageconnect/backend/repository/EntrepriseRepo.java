package stageconnect.backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import stageconnect.backend.model.Entreprise;
import stageconnect.backend.model.Offre;

public interface EntrepriseRepo extends MongoRepository<Entreprise, ObjectId> {
}
