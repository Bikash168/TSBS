import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About | TSBS">
      <main className="container mx-auto my-10 space-y-8">
        {/* Title Section */}
        <section>
          <h1 className="text-3xl font-bold text-teal-600">About TSBS</h1>
          <p className="mt-4 text-gray-700">
            TACT-School of Biotech Sciences (TSBS), a leading institution in biotechnology education in Eastern India, functions under the esteemed Trident Academy of Creative Technology (TACT). The college provides a B.Sc. Biotechnology (Honors) program along with postgraduate courses in fields such as Biotechnology, Applied Microbiology, Bioinformatics, Environmental Science, Public Health, and Social Work, all affiliated with Utkal University, Bhubaneswar, Odisha.
          </p>
        </section>

        {/* Faculty and Research Section */}
        <section>
          <h2 className="text-2xl font-bold text-teal-600">Our Faculty and Research</h2>
          <p className="mt-4 text-gray-700">
            TSBS boasts a team of 16 skilled and experienced faculty members with both national and international expertise in advanced areas of biotechnology. They are actively involved in intramural and extramural research, as well as consultancy work, in pivotal areas like Immunology, Cell Biology, Environmental Biotechnology, Plant Biotechnology, Genomics, Host-Pathogen Interactions, and Bioinformatics. Faculty frequently engage in conferences and seminars at national and international levels and publish their findings in reputed Science Citation Index (SCI & SCI-E) journals.
          </p>
        </section>

        {/* Facilities Section */}
        <section>
          <h2 className="text-2xl font-bold text-teal-600">Facilities</h2>
          <p className="mt-4 text-gray-700">
            The department has six advanced laboratories equipped with instruments such as a Thermo Cycler, UV-Vis Spectrophotometer, Cooling Centrifuges, and an ELISA Reader. In addition to academic excellence, TSBS encourages students to participate in various co-curricular activities, such as workshops, guest lectures, and events organized by academic clubs. These activities enhance students' practical knowledge, communication skills, and teamwork abilities.
          </p>
        </section>

        {/* Placement and Alumni Section */}
        <section>
          <h2 className="text-2xl font-bold text-teal-600">Placements and Alumni</h2>
          <p className="mt-4 text-gray-700">
            TSBS offers dedicated placement guidance and support to help students connect with industry leaders and secure rewarding career opportunities. Alumni have been placed in organizations like Thyrocare, Wipro, Dr. Reddy’s, and CP Aquaculture, and have pursued research at prestigious institutes like IARI, IICB, Tata Memorial Cancer Institute, CIFA, CRRI, RGCB, IIT-Guwahati, and IIT-Kharagpur.
          </p>
          <p className="mt-4 text-gray-700">
            The alumni network, established over 22 years, showcases the success stories of our graduates in research, teaching, and entrepreneurship, both in India and internationally. A dedicated alumni database is being developed to maintain strong connections and provide guidance for current students.
          </p>
        </section>

        {/* Principal’s Message */}
        <section>
          <h2 className="text-2xl font-bold text-teal-600">From the Principal's Desk</h2>
          <blockquote className="mt-4 italic border-l-4 border-teal-600 pl-4 text-gray-700">
            Trident School of Biotech Sciences (TSBS), a key division of Trident Academy of Creative Technology (TACT), is one of the leading centers for undergraduate and postgraduate Biotechnology education in Odisha, affiliated with Utkal University. Despite its long-standing presence, the institution remains youthful, dynamic, and driven by enthusiasm and discipline.
          </blockquote>
          <p className="mt-4 text-gray-700">
            TSBS takes great pride in the success of its graduates, many of whom excel in research, teaching, and entrepreneurship. With collaborations with national and international organizations like the Institute of Life Sciences, NISER, and CIFA in India, and universities in Korea, Germany, Portugal, and France, TSBS promotes interactive research, seminars, and entrepreneurship programs.
          </p>
        </section>

        {/* Extracurricular and Personality Development */}
        <section>
          <h2 className="text-2xl font-bold text-teal-600">Student Development</h2>
          <p className="mt-4 text-gray-700">
            At TSBS, we emphasize confidence-building and personality development to prepare students for professional challenges. We organize industrial visits and internships, encouraging students to engage in hands-on experiences that bridge the gap between academics and the industry.
          </p>
        </section>
      </main>
    </Layout>
  );
}
