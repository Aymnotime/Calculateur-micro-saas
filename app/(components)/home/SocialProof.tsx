import FadeIn from "../animations/FadeIn";

const testimonials = [
  {
    quote: "Cet outil m'a fait réaliser que je perdais de l'argent sur mon produit phare.",
    author: "Sarah, Gérante Shopify",
  },
  {
    quote: "Simplicité déconcertante. Enfin un calculateur sans marketing bullshit.",
    author: "Hugo, Fondateur D2C",
  },
  {
    quote: "En 2 minutes, j’ai trouvé les fuites dans mes marges.",
    author: "Nadia, Marketplace Seller",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 text-center">Ils en parlent mieux que nous</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.author} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <blockquote className="text-gray-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-500">— {t.author}</figcaption>
              </figure>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
