package stageconnect.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "entreprise")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Entreprise {

    @Id
    private String id;

    private String nom;
    private String email;
    private String adresse;
    private String password;


}
