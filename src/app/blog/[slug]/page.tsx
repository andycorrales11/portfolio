import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import Window from '@/components/Window';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
};

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <main className="container mx-auto px-4 py-10 pt-24">
      <Window title={`blog/${params.slug}.mdx`}>
        <article className="prose prose-invert prose-headings:text-cyan-200 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 max-w-none p-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </p>
          <div className="mt-8">
            <MDXContent />
          </div>
        </article>
      </Window>
    </main>
  );
}
