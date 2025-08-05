import Window from '@/components/Window';

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-10 pt-24">
            <Window title="about_me.txt">
                <p className="text-lg text-gray-300 font-mono">
                    Hi! I am Andres Corrales, I am a Computer Engineering student at Texas A&M
                    University in College Station. I grew up in Monterrey, Mexico,
                    and then Houston, Texas.
                </p>
                <br />
                <p className="text-lg text-gray-300 font-mono">
                    Above all, I enjoy learning, acquiring knowledge, and sharing that knowledge. If anything, that is
                    what has driven me since I was a child.
                    This manifests itself in my wide array of hobbies, interests, and passions.
                    In fact, I would be willing to wager that you and I share at least one common interest,
                    whether that is in sports, music, film, technology, history, sociology, fashion,
                    politics, philosophy, visual arts, or any other topic. I relish in discussions
                    , whether they are agreements or disagreements, and in my free time if I am
                    not enjoying the company of other people I am diving deep into Wikipedia
                    rabbit holes about whichever topic I have deemed myself not knowedgable enough in.
                </p>
                <br />
                <p className="text-lg text-gray-300 font-mono">
                    This site will continue to evolve as my interests and skills do.
                    I try to think of it as scultpure I am carving away, revealing a clearer picture
                    of my brain every time I push to production. I will try to make it as genuine as possible,
                    both as a way to market myself but also so it serves a seperate functional purpose for
                    myself as a journal of my journey.
                </p>
                <br />
                <p className="text-lg text-gray-300 font-mono">
                    Now, some things I think are really interesting:
                </p>
                <div className="mt-4 text-lg text-cyan-200 font-mono">
                    <p>&gt; CURRENTLY LEARNING: Pandas (Python)</p>
                    <p>&gt; READING: &quot;Children of Dune&quot; by Frank Herbert, &quot;The Magic Mountain&quot; by Thomas Mann</p>
                    <p>&gt; LISTENING TO: &quot;20 Años&quot; by Luis Miguel, &quot;The Doors&quot; by The Doors</p>
                </div>
            </Window>
        </main>
    );
}
