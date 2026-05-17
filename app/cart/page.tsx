import Link from "next/link";
import {
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
export default function CartPage() {
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
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black">
          Promotion Cart
        </h1>

        <p className="text-gray-400 mt-4">
          Manage featured post purchases and promotions.
        </p>

        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mt-12">

          <div className="flex items-center justify-between border-b border-white/10 pb-6">

            <div>
              <h2 className="text-2xl font-bold">
                Homepage Promotion
              </h2>

              <p className="text-gray-400 mt-2">
                Pin your content to the top of HARSHSTARTUP.
              </p>
            </div>

            <p className="text-2xl font-bold">
              ₹499
            </p>

          </div>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>✔ Featured for 24 hours</p>
            <p>✔ Increased visibility</p>
            <p>✔ Creator analytics boost</p>
          </div>

          <div className="mt-10">

             <h3 className="text-2xl font-bold mb-6">
                Choose Payment Method
             </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <button className="bg-white text-black py-4 rounded-2xl font-semibold hover:scale-105 transition">
                 Visa
               </button>
            
               <button className="bg-zinc-800 py-4 rounded-2xl font-semibold hover:bg-zinc-700 transition">
                  PayPal
               </button>

                <button className="bg-zinc-800 py-4 rounded-2xl font-semibold hover:bg-zinc-700 transition">
                  Google Pay
                </button>

                <button className="bg-zinc-800 py-4 rounded-2xl font-semibold hover:bg-zinc-700 transition">
                  Apple Pay
                </button>

                <button className="bg-zinc-800 py-4 rounded-2xl font-semibold hover:bg-zinc-700 transition">
                 Paytm
                </button>

                <button className="bg-zinc-800 py-4 rounded-2xl font-semibold hover:bg-zinc-700 transition">
                  Amazon Pay
               </button>

              <button className="bg-zinc-800 py-4 rounded-2xl font-semibold hover:bg-zinc-700 transition">
                Venmo
              </button>

              <button className="bg-zinc-800 py-4 rounded-2xl font-semibold hover:bg-zinc-700 transition">
                Mastercard
              </button>

            </div>

            <button className="mt-8 w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
                Complete Purchase
            </button>

        </div>
        </div>

        </div>
    </main>
  )
}