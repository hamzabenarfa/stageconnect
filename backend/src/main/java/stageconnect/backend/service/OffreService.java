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

    public Offre getOffreById(ObjectId id) {
        Optional<Offre> existingOffre = offreRepo.findById(id);
        return existingOffre.orElse(null);
    }

    public List<Offre> getOffreByEntrepriseId(String id) {
        return offreRepo.findByEntrepriseId(id);
    }

    public Offre createOffre(Offre offre) {
        return offreRepo.save(offre);
    }

    public Offre updateOffre(ObjectId id, Offre updatedOffre) {
        Optional<Offre> existingOffre = offreRepo.findById(id);

        if (existingOffre.isPresent()) {
            Offre offreToUpdate = existingOffre.get();
            offreToUpdate.setTitle(updatedOffre.getTitle());
            offreToUpdate.setPlace(updatedOffre.getPlace());
            offreToUpdate.setDuration(updatedOffre.getDuration());
            offreToUpdate.setDescription(updatedOffre.getDescription());

            return offreRepo.save(offreToUpdate);
        } else {
            // Handle case where the Offre with the given ID is not found
            throw new RuntimeException("Offre not found with id: " + id);
        }
    }

    public void deleteOffre(ObjectId id) {
        offreRepo.deleteById(id);
    }

    public void deleteAllOffres() {
        offreRepo.deleteAll();
    }

    public Offre subscribeToOffer(ObjectId id, Offre updatedOffre) {
        Optional<Offre> existingOffreOptional = offreRepo.findById(id);

        if (existingOffreOptional.isPresent()) {
            Offre existingOffre = existingOffreOptional.get();

            // Assuming studentIds is a List<String> in the Offre class
            List<String> studentIds = existingOffre.getStudentIds();

            // Add the new student IDs to the existing list
            studentIds.addAll(updatedOffre.getStudentIds());

            // Set the updated list back to the Offre object
            existingOffre.setStudentIds(studentIds);

            // Save the updated Offre object
            return offreRepo.save(existingOffre);
        } else {
            throw new RuntimeException("Offre not found with id: " + id);
        }
    }


}
