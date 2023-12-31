package stageconnect.backend.controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;
import stageconnect.backend.model.Offre;
import stageconnect.backend.service.ImageService;
import stageconnect.backend.service.OffreService;

import java.io.File;
import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/api/offre")
public class OffreController {

    @Autowired
    private OffreService offreService;

    @Autowired
    private ImageService imageService;
    private String image;

    @GetMapping
    public ResponseEntity<List<Offre>> getAllOffres() {
        try {
            List<Offre> offres = offreService.getAllOffre();
            return new ResponseEntity<>(offres, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOffreByEntrepriseId(@PathVariable("id") String id) {
        try {
            List<Offre> offre = offreService.getOffreByEntrepriseId(id);
            if (offre != null) {
                return new ResponseEntity<>(offre, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Offre not found with id: " , HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    @PostMapping
    public ResponseEntity<Object> createOffre(@RequestBody Offre offre) {
        try {
            Offre createdOffre = offreService.createOffre(offre);
            return new ResponseEntity<>(createdOffre, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateOffre(@PathVariable("id") ObjectId id, @RequestBody Offre updatedOffre) {
        try {
            Offre updated = offreService.updateOffre(id, updatedOffre);
            if (updated != null) {
                return new ResponseEntity<>(updated, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Offre not found with id: " + id.toHexString(), HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("subscribe/{id}")
    public ResponseEntity<Object> subscribeToOffer(@PathVariable ObjectId id, @RequestBody Offre entity) {
        try {
            Offre updated = offreService.subscribeToOffer(id, entity);
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteOffre(@PathVariable("id") ObjectId id) {
        try {
            offreService.deleteOffre(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/all")
    public ResponseEntity<Object> deleteAllOffres() {
        try {
            offreService.deleteAllOffres();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @PostMapping("/uploadImage/{id}")
//    public ResponseEntity<Object> uploadImage(@PathVariable("id") ObjectId id, @RequestParam("file") MultipartFile file) {
//        try {
//            Offre updatedOffre = offreService.updateImage(id, file);
//            return new ResponseEntity<>(updatedOffre, HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }



}
