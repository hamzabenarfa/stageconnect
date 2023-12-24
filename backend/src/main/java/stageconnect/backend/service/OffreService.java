package stageconnect.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import stageconnect.backend.model.Offre;
import stageconnect.backend.repository.OffreRepo;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.bson.types.ObjectId;

@Service
public class OffreService {

    @Autowired
    private OffreRepo offreRepo;

    @Autowired
    private ImageService imageService;


    public List<Offre> getAllOffre() {
        return offreRepo.findAll();
    }

    public Offre getOffreById(ObjectId id) {
        Optional<Offre> existingOffre = offreRepo.findById(id);
        return existingOffre.orElse(null);
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


//    public Offre updateImage(ObjectId id, MultipartFile file) {
//        Optional<Offre> existingOffre = offreRepo.findById(id);
//
//        if (existingOffre.isPresent()) {
//            try {
//                String imageUrl = imageService.uploadImage(file);
//                Offre offreToUpdate = existingOffre.get();
//                offreToUpdate.setImg(imageUrl);
//                return offreRepo.save(offreToUpdate);
//            } catch (IOException e) {
//                throw new RuntimeException("Failed to upload image: " + e.getMessage());
//            }
//        } else {
//            throw new RuntimeException("Offre not found with id: " + id);
//        }
//    }
}
