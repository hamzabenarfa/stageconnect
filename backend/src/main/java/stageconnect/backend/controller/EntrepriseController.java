package stageconnect.backend.controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import stageconnect.backend.model.Entreprise;
import stageconnect.backend.repository.EntrepriseRepo;
import stageconnect.backend.service.EntrepriseService;

import java.util.List;

@RestController
@RequestMapping("/api/entreprise")
@CrossOrigin(origins = "http://localhost:3000")

public class EntrepriseController {

    @Autowired
    private EntrepriseService entrepriseService;

    @Autowired
    private EntrepriseRepo entrepriseRepo;
    @GetMapping
    public ResponseEntity<List<Entreprise>> getAllPosts() {
        List<Entreprise> entreprises= entrepriseService.getAllEntreprise();
        return new ResponseEntity<>(entreprises, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entreprise> getEntrepriseById(@PathVariable("id") ObjectId id) {
        Entreprise entreprise = entrepriseService.getEntrepriseById(id);
        return new ResponseEntity<>(entreprise, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Entreprise> createEntreprise(@RequestBody Entreprise entreprise) {
       Entreprise createdEntreprise = entrepriseService.createEntreprise(entreprise);
        return new ResponseEntity<>(createdEntreprise, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Entreprise> updateEntreprise(@PathVariable("id") ObjectId id, @RequestBody Entreprise updatedEntreprise) {
        Entreprise updated = entrepriseService.updateEntreprise(id, updatedEntreprise);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntreprise(@PathVariable("id") ObjectId id) {
        entrepriseService.deleteEntreprise(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/all")
    public ResponseEntity<Object> deleteAllEntreprises() {
        try {
            entrepriseService.deleteAllEntreprises();
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
