package stageconnect.backend.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import stageconnect.backend.model.InscriEntreprise;
import stageconnect.backend.repository.InscriEntRepo;

import java.util.List;
import java.util.Optional;

@Service
public class InscriEntService {

    @Autowired
    private InscriEntRepo inscriEntRepo;
    private String pwd_ent;

    public List<InscriEntreprise> getAllInscri() {
        return inscriEntRepo.findAll();
    }

    public InscriEntreprise createInscri(InscriEntreprise inscriEntreprise){
        inscriEntreprise.setPwd_ent(inscriEntreprise.getPwd_ent());
        return inscriEntRepo.save(inscriEntreprise);
    }


    public InscriEntreprise updateInscri(ObjectId id, InscriEntreprise updatedInscri) {
        Optional<InscriEntreprise> existingInscri = inscriEntRepo.findById(id);

        if (existingInscri.isPresent()) {
            InscriEntreprise inscriToUpdate = existingInscri.get();
            inscriToUpdate.setEmail_ent(updatedInscri.getEmail_ent());
            if (updatedInscri.getPwd_ent() != null) {
                inscriToUpdate.setPwd_ent(updatedInscri.getPwd_ent());
            }

            return inscriEntRepo.save(inscriToUpdate);
        } else {
            throw new RuntimeException("Inscription not found with id: " + id.toHexString());
        }
    }


    public void setPwd_ent(String password) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        this.pwd_ent = password;
    }




    public void deleteInscri(ObjectId id) {
        inscriEntRepo.deleteById(id);
    }

}
