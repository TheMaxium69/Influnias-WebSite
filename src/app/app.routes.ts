import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { tyroUiErrorRoutes, TyroUiSeo, tyroUiLocalizedRoutes } from 'tyrolium-ui';

/* ─── SEO (titre + description par page, FR / EN) ─────────────────────── */

const SEO_HOME: TyroUiSeo = {
  fullTitle:   { fr: 'Influnias - Agence de Créateurs de Contenu', en: 'Influnias - Content Creator Agency' },
  description: { fr: 'Influnias est une agence de créateurs de contenu qui donne aux talents du numérique les moyens de grandir. De la stratégie éditoriale aux partenariats de marque, nous accompagnons chaque créateur avec expertise et passion. Une filiale de Tyrolium.', en: 'Influnias is a content creator agency that gives digital talents the means to grow. From editorial strategy to brand partnerships, we support every creator with expertise and passion. A Tyrolium subsidiary.' },
};

export const routes: Routes = tyroUiLocalizedRoutes([
    { path: '',    component: Home, data: { seo: SEO_HOME } },
    ...tyroUiErrorRoutes(),
]);
