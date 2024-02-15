import Navbar from "@/components/sharedui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex justify-center items-center bg-stone-950">
        <h1 className="text-lime-50 text-3xl">Homepage</h1>
      </main>
    </>
  );
}
