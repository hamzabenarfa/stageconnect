package stageconnect.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "offre")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Offre {

    @Id
    private String id;

    private String titre;
    private String nomEt;


}
