import { allPosts } from ;
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import Window from '@/components/Window';

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="container mx-auto px-4 py-10 pt-24">
      <Window title="blog/">
        <div className="p-4">
          <h1 className="mb-8 text-center text-3xl font-bold tracking-wide text-cyan-200">
            Blog
          </h1>
          <div className="space-y-6">
            {posts.map((post) => (
              <Link href={post.url} key={post._id} className="block p-4 border border-cyan-400/30 rounded-lg hover:bg-cyan-900/20 transition-colors">
                <h2 className="text-xl font-bold text-cyan-200">{post.title}</h2>
                <p className="text-gray-400 mt-1">{post.summary}</p>
                <time dateTime={post.date} className="text-xs text-gray-500 mt-2 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </Window>
    </main>
  );
}
