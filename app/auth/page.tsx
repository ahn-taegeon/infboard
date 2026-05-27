import { Inter, Syne } from "next/font/google";

import { cn } from "@/lib/utils";
import { signInWithGoogle } from "./actions";

const syne = Syne({
  subsets: ["latin"],
  weight: "800",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function AuthPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-16 text-white">
      <div className="absolute inset-x-0 top-1/2 mx-auto h-72 max-w-3xl -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl" />

      <section className="relative z-40 flex w-full max-w-xl flex-col items-center px-8 py-12 text-center md:px-12">
        <div className="absolute inset-0 -z-10 rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-2xl" />
        <div className="absolute inset-x-0 top-1/2 -z-20 mx-auto h-72 max-w-2xl -translate-y-1/2 rounded-full bg-white/[0.16] blur-3xl" />

        <p
          className={cn(
            syne.className,
            "text-5xl font-extrabold tracking-tight text-white md:text-7xl",
          )}
        >
          Infinie.
        </p>
        <p
          className={cn(
            inter.className,
            "mt-5 max-w-lg text-lg font-light leading-8 text-white/75 md:text-xl md:leading-9",
          )}
        >
          Sign in to return to your infinite space.
        </p>

        <form action={signInWithGoogle} className="mt-10 w-full max-w-sm">
          <button
            type="submit"
            className={cn(
              inter.className,
              "flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white px-7 py-4 text-base font-light text-[#171717] transition-transform hover:scale-[1.03] active:scale-[0.99] md:text-lg",
            )}
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </form>
      </section>
    </main>
  );
}
