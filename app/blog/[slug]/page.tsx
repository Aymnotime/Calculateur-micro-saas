import { notFound } from 'next/navigation';
import { posts } from '../../../(content)/dummy-posts';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 md:px-6 py-12">
      <article>
        <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('fr-FR')}</div>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">{post.title}</h1>
        <p className="mt-2 text-gray-700">{post.description}</p>
        <div className="mt-8 text-gray-800 leading-relaxed">
          {post.content}
        </div>
      </article>
    </main>
  );
}
