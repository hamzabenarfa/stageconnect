package stageconnect.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stageconnect.backend.model.Offre;
import stageconnect.backend.repository.OffreRepo;

import java.util.List;
import java.util.Optional;
import org.bson.types.ObjectId;

@Service
public class OffreService {

    @Autowired
    private OffreRepo offreRepo;

    public List<Offre> getAllOffre() {
        return offreRepo.findAll();
    }

    public Offre createOffre(Offre offre) {
        return offreRepo.save(offre);
    }

    public Offre updateOffre(ObjectId id, Offre updatedOffre) {
        Optional<Offre> existingOffre = offreRepo.findById(id);

        if (existingOffre.isPresent()) {
            Offre offreToUpdate = existingOffre.get();
            offreToUpdate.setTitre(updatedOffre.getTitre());
            offreToUpdate.setNomEt(updatedOffre.getNomEt());

            return offreRepo.save(offreToUpdate);
        } else {
            // Handle case where the Offre with the given ID is not found
            throw new RuntimeException("Offre not found with id: " + id.toHexString());
        }
    }

    public void deleteOffre(ObjectId id) {
        offreRepo.deleteById(id);
    }
}
