package stageconnect.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stageconnect.backend.model.Entreprise;
import stageconnect.backend.model.Offre;
import stageconnect.backend.repository.EntrepriseRepo;
import stageconnect.backend.repository.OffreRepo;

import java.util.List;
import java.util.Optional;
import org.bson.types.ObjectId;

@Service
public class EntrepriseService {

    @Autowired
    private EntrepriseRepo entrepriseRepo;

    public List<Entreprise> getAllEntreprise() {
        return entrepriseRepo.findAll();
    }

    public Entreprise createEntreprise(Entreprise entreprise) {
        return entrepriseRepo.save(entreprise);
    }

    public Entreprise updateEntreprise(ObjectId id, Entreprise updatedEntreprise) {
        Optional<Entreprise> existingEntreprise = entrepriseRepo.findById(id);

        if (existingEntreprise.isPresent()) {
            Entreprise entrepriseToUpdate = existingEntreprise.get();
            entrepriseToUpdate.setNom(updatedEntreprise.getNom());
            entrepriseToUpdate.setEmail(updatedEntreprise.getEmail());
            entrepriseToUpdate.setAdresse(updatedEntreprise.getAdresse());
            return entrepriseRepo.save(entrepriseToUpdate);
        } else {
            // Handle case where the Offre with the given ID is not found
            throw new RuntimeException("Offre not found with id: " + id.toHexString());
        }
    }

    public void deleteEntreprise(ObjectId id) {
        entrepriseRepo.deleteById(id);
    }
}
