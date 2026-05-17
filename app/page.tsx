"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();
  const products = [
  {
    id: 1,
    name: "Travel Creator Vlog",
    price: "Promoted",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Gaming Highlights",
    price: "Featured",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Car Cinematic Reel",
    price: "Trending",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Night City Photography",
    price: "Sponsored",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
]

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-lg z-50">

  <Link
    href="/"
    className="text-2xl font-black tracking-tight flex items-center gap-3 hover:opacity-80 transition"
  >
    <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-black text-lg">
      D
    </div>

    <span className="uppercase">
      DIGIOTS
    </span>
  </Link>

  <div className="flex items-center gap-8">

    <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">

      <Link href="/" className="hover:text-white transition font-medium">
        Home
      </Link>

      <Link href="/shop" className="hover:text-white transition font-medium">
        Shop
      </Link>

      <Link href="/collections" className="hover:text-white transition font-medium">
        Collections
      </Link>

      <Link href="/cart" className="hover:text-white transition font-medium">
        Cart
      </Link>

    </div>

    <div className="hidden md:flex items-center bg-zinc-900 border border-white/10 rounded-2xl px-4 py-2">

      <input
        type="text"
        placeholder="Search creators, posts..."
        className="bg-transparent outline-none text-sm text-white placeholder:text-gray-500 w-64"
      />

    </div>

    <div className="flex items-center gap-4">

  {!isSignedIn && (
    <SignInButton mode="modal">
      <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition">
        Login
      </button>
    </SignInButton>
  )}

  {isSignedIn && <UserButton />}

</div>

  </div>

</nav>
      <section className="px-8 py-24 text-center">
        <p className="uppercase tracking-[0.3em] text-gray-400 mb-4 text-sm">
          Creator Platform
        </p>

        <h2 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl mx-auto">
          Upload Content.<br />Grow Your Audience.
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          A creator-driven platform where anyone can upload vlogs, posts, edits, and featured content. Pay to promote your content directly on the homepage.
        </p>

        <Link
          href="/shop"
          className="mt-10 inline-block bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Explore Creators
        </Link>
      </section>

      <section className="px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Featured Creator Posts</h3>

          <Link href="/shop" className="text-gray-400 hover:text-white transition">
            Browse Feed
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-[1.02] transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold">{product.name}</h4>
                  <p className="text-gray-300">{product.price}</p>
                </div>

                <Link
                  href={`/post/${product.id}`}
                  className="mt-5 block w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition text-center"
                >
                  View Post
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="bg-zinc-900 rounded-[2rem] p-10 text-center border border-white/10">
          <h3 className="text-4xl font-bold mb-4">
            Promote Your Content
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Upload for free or pay to pin your content at the top of the homepage for maximum visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your contact email"
              className="flex-1 bg-black border border-white/10 rounded-xl px-5 py-4 outline-none"
            />
              <p className="text-sm text-gray-400 mt-3">
                Or Directly Contact Us:
                <br />
                aashutosht3107@gmail.com, harsh.digiot@gmail.com or abc@idek.com
              </p>

            <button className="bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 DIGIOTS. All rights reserved.

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400">
          <span>Online Payments:</span>
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Apple Pay</span>
          <span>Google Pay</span>
          <span>PayPal</span>
          <span>Venmo</span>
          <span>Paytm</span>
          <span>Amazon Pay</span>
        </div>
      </footer>
    </main>
  )
}
