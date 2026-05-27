import Link from "next/link";

export default function AuthCodeErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <section className="w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold">Sign in failed</h1>
        <p className="mt-4 text-white/70">
          The Google sign-in request could not be completed. Try again from the
          auth page.
        </p>
        <Link
          href="/auth"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Back to sign in
        </Link>
      </section>
    </main>
  );
}
