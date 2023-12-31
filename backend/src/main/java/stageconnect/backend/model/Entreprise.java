package stageconnect.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Getter
@Document(collection = "entreprise")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Entreprise {

    @Id
    private String id;

    private String nom;

    private String location;
    
    private String phone;


}
