import { getPostBySlug, getAllPostMeta } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Window from '@/components/Window';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPostMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: post.title, description: post.summary };
  } catch {
    return {};
  }
}

export default async function LogEntryPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10 pt-24 max-w-3xl">
      <Window title={`log/${slug}.mdx`}>
        <div className="mb-4 font-mono text-xs text-[#00ff41]/50">
          <span>[{post.date}]</span>
          {post.tags && post.tags.length > 0 && (
            <span className="ml-4">
              {post.tags.map((t) => `#${t}`).join(' ')}
            </span>
          )}
        </div>
        <h1 className="font-[family-name:var(--font-pixel)] text-[#00ff41] text-lg mb-6 leading-relaxed">
          {post.title}
        </h1>
        <div className="prose prose-invert max-w-none font-mono text-sm
          prose-headings:font-mono prose-headings:text-[#00ff41]
          prose-p:text-[#00ff41]/80
          prose-a:text-[#00cc33] prose-a:no-underline hover:prose-a:underline
          prose-code:text-[#00ff41] prose-code:bg-[#0a1a0a]
          prose-pre:bg-[#0a1a0a] prose-pre:border prose-pre:border-[#00ff41]/30
          prose-strong:text-[#00ff41]
          prose-li:text-[#00ff41]/80">
          <MDXRemote source={post.content} />
        </div>
      </Window>
    </main>
  );
}
