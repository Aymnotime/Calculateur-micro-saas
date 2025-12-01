import Hero from "./(components)/home/Hero";
import FeatureSection from "./(components)/home/FeatureSection";
import SocialProof from "./(components)/home/SocialProof";
import BlogPreview from "./(components)/home/BlogPreview";
import ProfitCalculator from "./(components)/calculator/ProfitCalculator";

export const metadata = {
  title: 'Accueil — ProfitEngine',
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section id="tool" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProfitCalculator />
        </div>
      </section>
      <FeatureSection />
      <SocialProof />
      <BlogPreview />
    </main>
  );
}
