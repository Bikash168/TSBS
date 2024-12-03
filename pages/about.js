import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10">
        <h1 className="text-3xl font-bold text-teal-600">About TSBS</h1>
        <p className="mt-4 text-gray-700">
          TSBS is a DSIR-certified Scientific and Industrial Research Organization affiliated with Utkal University, Odisha. We aim to foster innovation in biotechnology and empower the next generation of leaders in the bioeconomy.
        </p>
      </main>
      <Footer />
    </>
  );
}
