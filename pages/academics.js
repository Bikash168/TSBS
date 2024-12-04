import Layout from '../components/Layout';
import Link from 'next/link';

export default function Academics() {
  return (
    <Layout title="Academics | TSBS">
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

        {/* TSBS Overview */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">About TSBS</h2>
          <p className="mt-4 text-lg text-gray-700">
            The Trident School of Biotech Sciences (TSBS) began in the academic session 2002-03, offering the M.Sc. in Biotechnology. TSBS has expanded its academic offerings, and since 2004, it has also offered the B.Sc. (Hons) Biotechnology program. It operates as a dedicated institution under the Trident Group, located at Trident Technoplex, F2, Chandaka Industrial Estate, Bhubaneswar-24. TSBS attracts students from across Eastern India and has been recognized as the top biotechnology college in Eastern India.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            TSBS provides students with the latest knowledge through modern teaching methods and practical learning experiences. Workshops, seminars, and certificate programs in CRISPR, bioinformatics, and environmental sustainability ensure that students are well-prepared for careers in biotechnology.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Location:</strong> Trident Technoplex, F2, Chandaka Industrial Estate, Bhubaneswar-24.
          </p>
        </section>

        {/* Video Tour */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Virtual Tour of TSBS</h2>
          <p className="mt-4 text-lg text-gray-700">
            Watch our virtual tour to explore the campus and facilities at TSBS.
          </p>
          <a
            href="https://www.youtube.com/watch?v=link-to-tour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-teal-600 hover:underline"
          >
            Click here for the video tour
          </a>
        </section>

        {/* Dropdown Menu for Academic Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Academic Details</h2>
          <ul className="space-y-4">
            <li>
              <button className="text-teal-600 font-semibold">1. Courses</button>
              <ul className="pl-6 mt-2">
                <li className="font-medium">Undergraduate Programs</li>
                <ul className="pl-6">
                  <li>B.Sc. in Biotechnology</li>
                </ul>
                <li className="font-medium">Postgraduate Programs</li>
                <ul className="pl-6">
                  <li>M.Sc. in Biotechnology</li>
                  <li>M.Sc. in Environmental Science</li>
                  <li>M.Sc. in Applied Microbiology</li>
                  <li>M.Sc. in Bioinformatics</li>
                  <li>Master of Public Health</li>
                  <li>Master of Social Work</li>
                </ul>
              </ul>
            </li>
            <li><button className="text-teal-600 font-semibold">2. Faculty</button></li>
            <li><button className="text-teal-600 font-semibold">3. Publications</button></li>
            <li><button className="text-teal-600 font-semibold">4. Laboratories</button></li>
            <li><button className="text-teal-600 font-semibold">5. Library</button></li>
            <li><button className="text-teal-600 font-semibold">6. Advisory Board</button></li>
            <li><button className="text-teal-600 font-semibold">7. Student Projects</button></li>
            <li><button className="text-teal-600 font-semibold">8. Guest Seminars</button></li>
            <li><button className="text-teal-600 font-semibold">9. Student Seminars</button></li>
          </ul>
        </section>

        {/* Faculty Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Our Faculty</h2>
          <p className="mt-4 text-lg text-gray-700">
            TSBS has 16 experienced faculty members with national and international expertise in various advanced fields of biotechnology. They are dedicated to teaching, research, and consultancy work, actively participating in conferences and publishing in reputed journals.
          </p>
        </section>

        {/* Laboratories and Facilities */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Laboratories and Facilities</h2>
          <p className="mt-4 text-lg text-gray-700">
            TSBS is equipped with six state-of-the-art laboratories, offering students hands-on learning with advanced instruments such as Thermo Cyclers, UV-Vis Spectrophotometers, Cooling Centrifuges, and ELISA Readers. These facilities provide excellent opportunities to complement students’ theoretical knowledge with practical experience.
          </p>
        </section>

        {/* Research Opportunities */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Research Opportunities</h2>
          <p className="mt-4 text-lg text-gray-700">
            TSBS fosters a research-driven environment, encouraging both students and faculty to engage in diverse fields such as Immunology, Environmental Biotechnology, Plant Biotechnology, and Bioinformatics. These research opportunities are designed to address real-world challenges and contribute to innovation.
          </p>
        </section>

        {/* Program Details */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-4">1. M.Sc. in Environmental Science</h2>
          <p>
            The M.Sc. in Environmental Science program focuses on equipping students with the skills necessary to address the increasing environmental and developmental challenges linked to the transition toward a sustainable society. It offers insights into the socio-economic causes of pollution and environmental degradation, as well as their effects on human health, ecosystems, the atmosphere, and other living organisms. The program helps students develop the ability to independently assess environmental issues, analyze environmental systems, and propose sustainable solutions.
          </p>
          <p>
            <strong>Programme Objective</strong><br />
            • To teach students about environmental issues at local, regional, and global levels.<br />
            • To provide practical training in modern tools and techniques for environmental analysis.<br />
            • To raise students' awareness of environmental problems, climate change impacts, and conservation strategies.<br />
            • To make students adept at analyzing, managing, and resolving environmental challenges in a practical way.
          </p>
        </section>
      </main>
    </Layout>
  );
}
