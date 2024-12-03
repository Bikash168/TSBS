import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Courses() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10">
        <h1 className="text-3xl font-bold text-teal-600">Our Courses</h1>
        <ul className="mt-4 space-y-4">
          <li>B.Tech (Biotechnology)</li>
          <li>B.Sc. (Biotechnology Honors)</li>
          <li>M.Sc. (Applied Microbiology)</li>
          <li>Master of Public Health</li>
          <li>Master of Social Work</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
