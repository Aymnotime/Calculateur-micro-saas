export interface PostItem {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  content?: string;
}

export const posts: PostItem[] = [
  {
    slug: 'maitriser-marge-nette',
    title: 'Maîtriser sa marge nette en 10 minutes',
    description: 'Les étapes simples pour comprendre réellement votre marge nette.',
    date: '2025-10-01',
    content: 'Contenu long de l\'article sur la marge nette...'
  },
  {
    slug: 'frais-caches-ecommerce',
    title: 'Les frais cachés qui ruinent votre rentabilité',
    description: 'De la plateforme au paiement: liste des coûts souvent oubliés.',
    date: '2025-09-15',
    content: 'Contenu long de l\'article sur les frais cachés...'
  },
  {
    slug: 'roas-cible-break-even',
    title: 'ROAS Cible: comprendre le vrai break-even',
    description: 'Comment calculer et utiliser le ROAS de seuil de rentabilité.',
    date: '2025-08-20',
    content: 'Contenu long de l\'article sur le ROAS cible...'
  },
  {
    slug: 'optimiser-logistique',
    title: 'Optimiser la logistique sans dégrader l’UX',
    description: 'Réduire les coûts d’expédition tout en gardant des clients heureux.',
    date: '2025-07-05',
    content: 'Contenu long de l\'article sur la logistique...'
  }
];
