import Link from "next/link";

export default function Home() {
  console.log("Hello world");

  return (
    <main>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/1">Meal 1</Link>
      </p>
    </main>
  );
}
