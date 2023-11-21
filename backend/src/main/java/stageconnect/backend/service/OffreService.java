package stageconnect.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import stageconnect.backend.model.Offre;
import stageconnect.backend.repository.OffreRepo;

import java.util.List;

@Service
public class OffreService {

    @Autowired
    private OffreRepo offreRepo;

    public List<Offre> getAllOffre() {
        return offreRepo.findAll();
    }

    public Offre createOffre(Offre offre) {
        // Additional logic if needed
        return offreRepo.save(offre);
    }
}
