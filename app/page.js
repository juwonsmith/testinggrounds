import Link from "next/link";
export default function Home() {
  return (
    <main className="flex  justify-center">
      <Link
        href="/page1"
        className="text-center flex justify-center bg-gray-600 rounded w-[10rem] h-max"
      >
        page 1 link
      </Link>
    </main>
  );
}
