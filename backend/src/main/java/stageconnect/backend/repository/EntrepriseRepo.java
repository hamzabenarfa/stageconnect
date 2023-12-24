package stageconnect.backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import stageconnect.backend.model.Entreprise;
import stageconnect.backend.model.Offre;
import stageconnect.backend.model.User;

import java.util.Optional;

public interface EntrepriseRepo extends MongoRepository<Entreprise, ObjectId> {


}
