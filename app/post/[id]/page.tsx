import Link from "next/link";
import {
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const posts = [
  {
    id: 1,
    title: "Travel Creator Vlog",
    creator: "Demo Creator",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    description:
      "A cinematic travel vlog exploring beautiful locations and storytelling visuals.",
  },

  {
    id: 2,
    title: "Gaming Highlights",
    creator: "Demo Creator",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    description:
      "Fast-paced gaming moments, edits, and competitive highlights.",
  },

  {
    id: 3,
    title: "Car Cinematic Reel",
    creator: "Demo Creator",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    description:
      "Night drives, engine shots, cinematic transitions, and automotive visuals.",
  },

  {
    id: 4,
    title: "Night City Photography",
    creator: "Demo Creator",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    description:
      "A collection of cinematic city photography and aesthetic visuals.",
  },
];

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const resolvedParams = await params;

  const post = posts.find(
    (p) => p.id === Number(resolvedParams.id)
  );

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Post Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="flex items-center justify-between py-6 border-b border-white/10 mb-12">

  <Link
    href="/"
    className="text-2xl font-black tracking-tight flex items-center gap-3"
  >
    <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-black text-lg">
      D
    </div>

    <span>DIGIOTS</span>
  </Link>

  <div className="flex items-center gap-8">

    <div className="flex items-center gap-6 text-sm text-gray-300">

      <Link href="/" className="hover:text-white transition">
        Home
      </Link>

      <Link href="/shop" className="hover:text-white transition">
        Shop
      </Link>

      <Link href="/collections" className="hover:text-white transition">
        Collections
      </Link>

      <Link href="/cart" className="hover:text-white transition">
        Cart
      </Link>

    </div>

    <div className="hidden md:flex items-center bg-zinc-900 border border-white/10 rounded-2xl px-4 py-2">

      <input
        type="text"
        placeholder="Search creators..."
        className="bg-transparent outline-none text-sm text-white placeholder:text-gray-500 w-56"
      />

    </div>

    <div className="flex items-center gap-4">

      <SignInButton mode="modal">
        <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition">
          Login
        </button>
      </SignInButton>

      <UserButton />

    </div>

  </div>

</nav>

      <section className="max-w-6xl mx-auto px-8 py-16">

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        <div className="mt-10">

          <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">
            Featured Creator Post
          </p>

          <h1 className="text-6xl font-black mt-4">
            {post.title}
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Uploaded by {post.creator}
          </p>

          <p className="text-gray-300 mt-8 max-w-3xl text-xl leading-relaxed">
            {post.description}
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
            Promote This Post
          </button>

        </div>

      </section>

    </main>
  );
}