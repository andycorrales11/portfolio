import { getAllPostMeta } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Log',
  description: 'Development journal and notes.',
};

export default function LogPage() {
  const posts = getAllPostMeta();

  return (
    <main className="container mx-auto px-4 py-10 pt-24 max-w-3xl">
      <h1 className="font-[family-name:var(--font-pixel)] text-[#00ff41] text-xl mb-2">
        /log
      </h1>
      <p className="font-mono text-sm text-[#00ff41]/40 mb-8">
        ── development journal ──────────────────────────────
      </p>

      {posts.length === 0 ? (
        <p className="font-mono text-[#00ff41]/40 text-sm">no entries yet.</p>
      ) : (
        <ul className="space-y-4 font-mono">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/log/${post.slug}`}
                className="group flex gap-3 text-sm hover:text-[#00ff41] transition-colors"
              >
                <span className="shrink-0 text-[#00ff41]/50">[{post.date}]</span>
                <span className="text-[#00ff41]/80 group-hover:text-[#00ff41] group-hover:drop-shadow-[0_0_4px_rgba(0,255,65,0.6)]">
                  {post.title}
                  {post.summary && (
                    <span className="text-[#00ff41]/40"> — {post.summary}</span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
