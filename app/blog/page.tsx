import Link from 'next/link';
import { posts } from '../../(content)/dummy-posts';

export const metadata = {
  title: 'Blog — ProfitEngine',
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Le Blog</h1>
      <p className="text-gray-600 mt-2">Lectures rapides pour mieux piloter votre rentabilité.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString('fr-FR')}</div>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-2 text-sm text-gray-600">{p.description}</p>
            <div className="mt-4">
              <Link href={`/blog/${p.slug}`} className="text-sm font-medium text-gray-900 hover:underline">Lire →</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
