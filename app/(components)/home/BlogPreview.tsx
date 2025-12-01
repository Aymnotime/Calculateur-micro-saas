import Link from 'next/link';
import FadeIn from "../animations/FadeIn";
import { posts } from "../../../(content)/dummy-posts";

export default function BlogPreview() {
  const latest = [...posts].sort((a,b) => a.date < b.date ? 1 : -1).slice(0,3);
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 text-center">Derniers articles</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {latest.map(p => (
              <article key={p.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString('fr-FR')}</div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4">
                  <Link href={`/blog/${p.slug}`} className="text-sm font-medium text-gray-900 hover:underline">Lire →</Link>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
