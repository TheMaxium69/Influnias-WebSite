import { Component, computed, inject } from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  readonly lang = inject(TyroUiLangService).lang;

  readonly services = computed(() => this.lang() === 'en' ? [
    { icon: 'ri-camera-fill',       title: 'Creative Production',        desc: 'Organization of photo shoots, major filming, complete video services, and location scouting.' },
    { icon: 'ri-settings-3-fill',   title: 'Project Management',          desc: 'Support for major projects, event planning for creators, and recruitment facilitation across various fields.' },
    { icon: 'ri-megaphone-fill',    title: 'Visibility Support',          desc: 'Connecting with partnerships, creators, and influencers, as well as optimizing visibility and product promotion.' },
    { icon: 'ri-computer-fill',     title: 'Technical Services',          desc: 'Custom IT solutions, royalty-free music creation, social media management, and video production setup.' },
    { icon: 'ri-search-fill',       title: 'Custom Analytics & Reports',  desc: 'Monthly performance reviews, key data summaries, and project success tracking.' },
    { icon: 'ri-rss-fill',          title: 'Communication Optimization',  desc: 'Improving traditional and digital communication across multiple channels.' },
    { icon: 'ri-calendar-fill',     title: 'Administrative Organization', desc: 'Appointment management and a dedicated agent with FAQ.' },
    { icon: 'ri-price-tag-3-fill',  title: 'Product Promotion',           desc: 'Promotion of various creator products.' },
    { icon: 'ri-brain-fill',        title: 'Psychological Support',       desc: 'Providing emotional and psychological support.' },
  ] : [
    { icon: 'ri-camera-fill',       title: 'Production Créative',                desc: 'Organisation de shootings photo, de tournages importants, services vidéo complets, et recherche de lieux de tournage.' },
    { icon: 'ri-settings-3-fill',   title: 'Gestion de Projets',                 desc: 'Accompagnement de projets majeurs, planification d\'événements pour créateurs, et facilitation des recrutements dans divers domaines.' },
    { icon: 'ri-megaphone-fill',    title: 'Aide à la Visibilité',               desc: 'Mise en relation avec partenariats, créateurs, et influenceurs, ainsi qu\'optimisation de la visibilité et promotion de produits.' },
    { icon: 'ri-computer-fill',     title: 'Services Techniques',                desc: 'Informatique personnalisée, création de musique "Libre de Droits," gestion des médias sociaux, et mise en place de la production vidéo.' },
    { icon: 'ri-search-fill',       title: 'Analyse et Rapports Personnalisés',  desc: 'Études mensuelles des statistiques, récapitulatif des données clés, et suivi du succès du projet.' },
    { icon: 'ri-rss-fill',          title: 'Optimisation de la Communication',   desc: 'Amélioration de la communication traditionnelle et numérique sur différents canaux.' },
    { icon: 'ri-calendar-fill',     title: 'Organisation Administrative',         desc: 'Gestion des rendez-vous et un agent dédié avec FAQ.' },
    { icon: 'ri-price-tag-3-fill',  title: 'Mise en Avant des Produits',          desc: 'Promotion de divers produits de créateurs.' },
    { icon: 'ri-brain-fill',        title: 'Soutien Psychologique',               desc: 'Fourniture de soutien émotionnel et psychologique.' },
  ]);
}
