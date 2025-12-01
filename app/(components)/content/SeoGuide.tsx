export default function SeoGuide() {
  return (
    <section className="mt-12 max-w-none space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Le Guide Ultime de la Rentabilité E-commerce</h2>
      <p className="text-gray-700">
        Optimiser la rentabilité de votre boutique en ligne commence par la compréhension précise de vos coûts et de vos marges.
        Ce calculateur fonctionne en temps réel (sans bouton “Calculer”) afin de vous offrir une expérience fluide et instantanée.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Comment calculer le prix de vente ?</h3>
      <p className="text-gray-700">
        Le <strong>prix de vente</strong> est le montant payé par le client. Il doit couvrir vos coûts (achat, logistique, frais de plateforme et de paiement)
        tout en laissant une marge nette suffisante pour être rentable.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Comment estimer le coût d’achat ?</h3>
      <p className="text-gray-700">
        Le <strong>coût d’achat</strong> inclut le prix fournisseur, les éventuels frais d’importation et d’assemblage.
        Renseignez-le au plus juste pour éviter toute “surprise” dans votre marge.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Comment prendre en compte la logistique ?</h3>
      <p className="text-gray-700">
        Le <strong>coût d’expédition</strong> comprend l’affranchissement, l’emballage et la manutention.
        Selon votre modèle, vous pouvez intégrer une partie de ce coût dans votre prix de vente.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Que signifient les frais de plateforme et de paiement ?</h3>
      <p className="text-gray-700">
        Les <strong>frais plateforme</strong> (ex. marketplace) et les <strong>frais de paiement</strong> (ex. Stripe/PayPal) comportent une part variable (%) et une part fixe (€).
        Cet outil les additionne automatiquement pour vous.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Qu’est-ce que le CPA (Coût Par Acquisition) ?</h3>
      <p className="text-gray-700">
        Le <strong>CPA</strong> est le coût marketing moyen pour obtenir une commande (via publicités ou autres canaux).
        Il impacte directement votre marge nette. Si votre marge devient négative, vous devez soit réduire vos coûts, soit améliorer votre conversion.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">ROAS Cible (Break-even)</h3>
      <p className="text-gray-700">
        Le <strong>ROAS Cible</strong> correspond au niveau de performance minimum requis pour que vos publicités ne fassent ni perdre ni gagner d’argent.
        Il est calculé comme <em>Prix de vente / (Prix de vente - Coût de revient sans CPA)</em>.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Transparence et monétisation</h3>
      <p className="text-gray-700">
        Notre monétisation est <strong>100% transparente</strong>. Si vous appréciez cet outil, soutenez-nous en découvrant nos partenaires recommandés (liens affiliés).
        Nous ne recommandons que des outils que nous utilisons et estimons.
      </p>
    </section>
  );
}
