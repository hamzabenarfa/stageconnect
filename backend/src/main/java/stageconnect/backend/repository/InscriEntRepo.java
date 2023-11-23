package stageconnect.backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import stageconnect.backend.model.InscriEntreprise;

public interface InscriEntRepo extends MongoRepository<InscriEntreprise , ObjectId> {
}
