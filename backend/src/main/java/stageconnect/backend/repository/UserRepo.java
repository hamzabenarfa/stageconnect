package stageconnect.backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import stageconnect.backend.model.User;

public interface UserRepo extends MongoRepository<User, ObjectId> {
}
