import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Academics() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10">
        {/* Page Title */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-teal-600">Academics at TSBS</h1>
          <p className="mt-4 text-lg text-gray-700">
            Explore the programs, facilities, and academic excellence at TACT-School of Biotech Sciences (TSBS).
          </p>
        </section>

        {/* Programs Offered */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Programs We Offer</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">B.Tech (Biotechnology)</h3>
              <p>Learn cutting-edge biotechnology techniques and applications.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">B.Sc. (Biotechnology)</h3>
              <p>Build a strong foundation in biotechnology with an emphasis on practical learning.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">M.Sc. (Biotechnology)</h3>
              <p>Advance your knowledge and skills for research and innovation in biotechnology.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">M.Sc. (Applied Microbiology)</h3>
              <p>Specialize in microbiological research and industrial applications.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">M.Sc. (Environmental Science)</h3>
              <p>Study environmental processes and sustainable solutions.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">M.Sc. (Bioinformatics)</h3>
              <p>Integrate biology and technology for data analysis and research.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Master in Public Health</h3>
              <p>Develop expertise in global public health and management solutions.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Master of Social Work</h3>
              <p>Prepare for impactful careers in social work and community development.</p>
            </li>
          </ul>
        </section>

        {/* Faculty */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Our Faculty</h2>
          <p className="mt-4 text-lg text-gray-700">
            TSBS is proud to have a team of 16 experienced faculty members with national and international expertise in advanced fields of biotechnology. They are actively involved in teaching, research, and consultancy work, participating in conferences, and publishing in reputed journals.
          </p>
        </section>

        {/* Laboratories */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Laboratories and Facilities</h2>
          <p className="mt-4 text-lg text-gray-700">
            TSBS houses six state-of-the-art laboratories equipped with advanced instruments such as Thermo Cyclers, UV-Vis Spectrophotometers, Cooling Centrifuges, and ELISA Readers. These facilities provide students with hands-on learning opportunities to complement their theoretical knowledge.
          </p>
        </section>

        {/* Research Opportunities */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Research Opportunities</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our students and faculty actively engage in research across various fields, including Immunology, Environmental Biotechnology, Plant Biotechnology, and Bioinformatics. These opportunities foster innovation and help address real-world challenges.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
