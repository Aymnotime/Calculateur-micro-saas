# Calculateur de Profit E-commerce

Outil ultra-rapide (Next.js + Tailwind) pour calculer en temps réel la rentabilité de vos produits.

## Objectifs
- UX 10x : aucune friction, calcul instantané.
- Performance Lighthouse 100 (SEO & expérience).
- Transparence : aucune pub intrusive, monétisation par affiliation qualitative.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez http://localhost:3000

## Structure
```
app/
  layout.tsx
  page.tsx
  globals.css
  (components)/
    calculator/
      InputPanel.tsx
      ProfitDashboard.tsx
    shared/
      NumberInput.tsx
      ResultCard.tsx
      AffiliateBox.tsx
    content/
      SeoGuide.tsx
```

## Calculs
- Marge nette = Prix de vente - (Coût achat + Expédition + Frais plateforme + Frais paiement + CPA)
- Marge nette % = Marge nette / Prix de vente * 100
- ROAS cible = Prix de vente / (Prix de vente - Coût de revient sans CPA)

## Monétisation Éthique
Nous recommandons uniquement des services utilisés et validés qui améliorent la rentabilité (banque pro, emailing...).


## Licence
Propriétaire - Usage interne démo.
