"use client";
// NOTE: Ceci est le placeholder. L'utilisateur y insérera sa vraie logique.
export default function ProfitCalculator() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Calculateur de rentabilité
        </h2>
        <span className="hidden sm:inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900 border border-blue-100">
          Beta
        </span>
      </div>
      <p className="text-slate-600 text-center md:text-left">
        Estimez rapidement votre marge nette et votre ROAS cible à partir de vos coûts clés.
      </p>
      <div className="mt-6 text-slate-500">
        (Placeholder pour l'outil de calcul interactif)
        <div className="mt-4 p-8 bg-slate-50 rounded-lg border border-slate-200">
          [La vraie logique du calculateur sera insérée ici]
        </div>
      </div>
    </div>
  );
}
