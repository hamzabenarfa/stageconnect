package stageconnect.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.internal.connection.Time;

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
    
    private Integer phone;


}
