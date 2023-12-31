package stageconnect.backend.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import stageconnect.backend.model.Offre;


public interface OffreRepo extends MongoRepository<Offre, ObjectId> {

    List<Offre> findByEntrepriseId(String entrepriseId);
}
