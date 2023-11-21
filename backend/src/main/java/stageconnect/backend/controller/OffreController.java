package stageconnect.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import stageconnect.backend.model.Offre;
import stageconnect.backend.service.OffreService;

import java.util.List;

@RestController
@RequestMapping("/api/offre")
public class OffreController {

    @Autowired
    private OffreService offreService;

    @GetMapping
    public ResponseEntity<List<Offre>> getAllPosts() {
        List<Offre> offres = offreService.getAllOffre();
        return new ResponseEntity<>(offres, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Offre> createOffre(@RequestBody Offre offre) {
        Offre createdOffre = offreService.createOffre(offre);
        return new ResponseEntity<>(createdOffre, HttpStatus.CREATED);
    }
}
