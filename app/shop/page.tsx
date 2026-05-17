import Link from "next/link";
import {
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black">Creator Feed</h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Explore trending uploads, promoted creator content,
          gaming edits, travel vlogs, and cinematic posts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">Travel Vlogs</h2>

              <p className="text-gray-400 mt-2">
                Explore cinematic journeys uploaded by creators.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">Gaming Content</h2>

              <p className="text-gray-400 mt-2">
                Watch trending clips and creator highlights.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">Car Reels</h2>

              <p className="text-gray-400 mt-2">
                Cinematic drives and automotive edits.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}