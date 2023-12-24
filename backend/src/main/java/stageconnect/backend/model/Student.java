package stageconnect.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Student")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Student {

    @Id
    private String id;
    private String firstName;
    private String lastName;


}
