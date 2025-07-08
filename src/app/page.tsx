import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-32 px-8">
        <h1 className="text-4xl font-bold">Welcome to STEMzLearning</h1>
        {/* other content here */}
      </main>
    </>
  );
}
