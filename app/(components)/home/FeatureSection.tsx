import { Activity, Calculator, Shield } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const features = [
  {
    title: "Calcul en Temps Réel",
    desc: "Aucune latence, aucun bouton. Tout se met à jour instantanément.",
    Icon: Activity,
  },
  {
    title: "Coûts Cachés Inclus",
    desc: "Frais plateforme, paiement, logistique, CPA — rien n’est oublié.",
    Icon: Calculator,
  },
  {
    title: "100% Gratuit & Anonyme",
    desc: "Pas d’inscription. Pas de traque agressive. Zéro friction.",
    Icon: Shield,
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 text-center">Tout ce qu'il vous faut, sans la complexité.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ title, desc, Icon }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <Icon className="w-6 h-6 text-gray-900" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
