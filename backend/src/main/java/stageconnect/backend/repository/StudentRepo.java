package stageconnect.backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import stageconnect.backend.model.Student;

public interface StudentRepo extends MongoRepository<Student, ObjectId> {
}
