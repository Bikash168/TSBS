import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto my-10">
        {/* Welcome Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-teal-600">Welcome to TSBS</h1>
          <p className="text-lg text-gray-700">
            Join the movement towards advancing bioeconomy and biomanufacturing, shaping a sustainable and prosperous future for India.
          </p>
        </section>

        {/* Courses Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Courses We Offer</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">B.Tech (Biotechnology)</h3>
              <p>Learn cutting-edge biotechnology applications and techniques.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">B.Sc. (Biotechnology)</h3>
              <p>Undergraduate program offering foundational knowledge in biotechnology.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">M.Sc. (Biotechnology)</h3>
              <p>Advanced studies in Biotechnology for research and innovation.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">M.Sc. (Applied Microbiology)</h3>
              <p>In-depth knowledge of microbiological applications in industry and research.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">M.Sc. (Environmental Science)</h3>
              <p>Study of environmental processes, issues, and sustainable solutions.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Master in Public Health</h3>
              <p>Build expertise in global public health solutions and management.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Master of Social Work</h3>
              <p>Empower individuals and communities through social work practices.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">M.Sc. (Bioinformatics)</h3>
              <p>Explore the integration of biology and technology for data analysis and research.</p>
            </li>
          </ul>
        </section>

        {/* About TSBS Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">About TACT-School of Biotech Sciences (TSBS)</h2>
          <p className="mt-4 text-lg text-gray-700">
            TACT-School of Biotech Sciences (TSBS), under the Trident Academy of Creative Technology (TACT), is a prominent biotechnology college in Eastern India. It is affiliated with Utkal University, Bhubaneswar, Odisha, and offers a B.Sc. Biotechnology (Honors) program along with postgraduate courses in Biotechnology, Applied Microbiology, Bioinformatics, Environmental Science, Public Health, and Social Work.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            The department has a team of 16 experienced faculty members with national and international expertise in advanced fields of biotechnology. The faculty are actively involved in research projects and consultancy work in areas such as Immunology, Cell Biology, Environmental Biotechnology, Plant Biotechnology, Genomics, Host-Pathogen Interactions, and Bioinformatics. They regularly participate in conferences and seminars, both in India and abroad, and publish their research in respected SCI and SCI-E journals.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            The department has six well-equipped laboratories, featuring modern instruments like Thermo Cyclers, UV-Vis Spectrophotometers, Cooling Centrifuges, and ELISA Readers. It also emphasizes holistic student development through co-curricular activities, academic clubs, and dedicated placement support to help students achieve their career goals.
          </p>
        </section>

        {/* Research Areas Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Research Areas</h2>
          <p className="mt-4 text-lg text-gray-700">
            Trident School of Biotech Sciences (TSBS), originally established as a teaching institute affiliated with Utkal University, has grown into a renowned research institution over the past decade. Under visionary leadership, the institution has expanded its focus on sustainability, cultivating a dynamic research environment.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Herbal Therapeutics</h3>
              <p>Research on natural therapeutic methods using herbal solutions.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Synthetic Greening</h3>
              <p>Exploring synthetic methods for promoting greener urban environments.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Environmental Biotech (Water and Biodegradable Waste Management)</h3>
              <p>Innovative solutions for water treatment and waste management through biotechnology.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Probiotics / Prebiotics / Nutraceuticals / Enzymes</h3>
              <p>Research in gut health and nutritional biotechnological applications.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Bio-Energy (Bio-Hydrogen)</h3>
              <p>Development of renewable energy solutions through bio-hydrogen technology.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Public Health & Immunology</h3>
              <p>Innovative approaches to enhancing public health and immunity through biotechnology.</p>
            </li>
          </ul>
        </section>

        {/* Research Focus Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Research Focus</h2>
          <div className="mt-4 text-lg text-gray-700">
            <p>
              TSBS Research leads the way in innovation for a sustainable future. 
            </p>
            {/* OR You can replace with this line */}
            {/* <p>TSBS Research focuses on creating innovative solutions for a sustainable future.</p> */}
            
            <p className="mt-6">
              Trident School of Biotech Sciences (TSBS), initially established as a teaching institute affiliated with Utkal University, has evolved into a respected research institution over the past decade. With strong leadership, the institute has shifted its focus towards sustainability, creating a dynamic environment for research and innovation. TSBS now plays a key role in advancing scientific knowledge and solutions, particularly in areas related to sustainability, by fostering collaboration and encouraging impactful research that addresses global challenges.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
