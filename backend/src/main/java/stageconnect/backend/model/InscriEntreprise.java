package stageconnect.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "inscription_entreprise")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class InscriEntreprise {
    @Id
    private String id;
    private String name_ent;
    private String username_ent;
    private String email_ent;
    private String pwd_ent;
}



