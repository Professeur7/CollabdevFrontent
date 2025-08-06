import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-projects',
  imports: [CommonModule],
  templateUrl: './list-projects.html',
  styleUrl: './list-projects.css'
})
export class ListProjects {

  projets = [
    { titre: 'Système de recommandation', statut: 'Encours', coin: 100, debloque: 0 },
    { titre: 'Système de distribution', statut: 'Encours', coin: 500, debloque: 0 },
    { titre: 'Application de chat temps réel', statut: 'Terminé', coin: 1000, debloque: 1 },
    { titre: 'E-commerce gestion stock...', statut: 'Débuté', coin: 1500, debloque: 0 },
    { titre: 'Système de suivi des ventes...', statut: 'Terminé', coin: 1800, debloque: 1 },
   // ... autres projets
  ];
}
