// pages/facilities.js

import Layout from "../components/Layout";

const FacilitiesPage = () => {
  return (
    <Layout
      title="Facilities - Trident School of Biotech Sciences"
      description="Explore the state-of-the-art facilities at Trident School of Biotech Sciences."
    >
      <section className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-semibold text-teal-600 text-center mb-8">Our Facilities</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Classroom Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Classrooms</h2>
            <p className="text-base text-black mb-4">
              Our smart classrooms provide a comfortable and engaging environment for learning. They are spacious, well-ventilated, and equipped with modern ICT tools, including LCD projectors, ensuring interactive teaching sessions. With a capacity to accommodate up to 70 students, the classrooms offer ample space for group activities and discussions.
            </p>
          </div>

          {/* Seminar Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Seminar Halls</h2>
            <p className="text-base text-black mb-4">
              Our seminar halls are furnished with LED interactive panels and have internet access, making them perfect for e-teaching, seminars, conferences, and workshops. These facilities help create an engaging environment for presentations, discussions, and learning activities. The setup ensures that all events run smoothly and allows for effective communication and knowledge sharing.
            </p>
          </div>

          {/* Library Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Library</h2>
            <p className="text-base text-black mb-4">
              Our library, located within the main academic block, is centrally air-conditioned and offers Wi-Fi access, ensuring a comfortable and conducive environment for study. With a seating capacity for 50 readers, it houses a vast collection of over 70,000 textbooks and reference books. The library also provides access to a wide range of e-journals, including Science Direct, IEEE, NPTEL, ISI, and ACM, supporting various academic and research needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Laboratories Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Laboratories</h2>
            <p className="text-base text-black mb-4">
              Our advanced laboratories are fully equipped with power backup and CCTV surveillance to ensure a secure and efficient learning environment. These labs support various disciplines, including General Biotechnology, Biochemistry, Molecular Biology, Bioinstrumentation, Microbiology, Plant Tissue Culture, Bioinformatics, Chemistry, and Animal Cell Culture. The labs feature state-of-the-art equipment such as Real-time PCR, Gradient PCR, ELISA Reader, Class II Biosafety Cabinet, Inverted Microscopes, and more.
            </p>
          </div>

          {/* Computer Facilities Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Computer Facilities</h2>
            <p className="text-base text-black mb-4">
              Our computer labs are outfitted with the latest systems and essential software, offering students a practical space to apply and experiment with the concepts learned in class. The labs feature 40 computers, each equipped with the necessary software for various academic and research tasks. Additionally, our campus is fully connected with a high-speed Wi-Fi network offering 1300 Mbps, allowing students to access the internet not only during class hours but also in the hostels, providing round-the-clock connectivity for study and research.
            </p>
          </div>

          {/* Auditorium Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Auditorium</h2>
            <p className="text-base text-black mb-4">
              The MPSS Hall, a spacious auditorium with a seating capacity of 500, serves as a key venue for a variety of events such as workshops, seminars, guest lectures, and talks. The seminar room on the first floor, equipped with modern audio-visual aids, is often used for co-curricular activities and smaller sessions. The annual cultural festival, “TRIFEST,” sees enthusiastic participation from students across all disciplines. Additionally, the auditorium hosts yoga sessions conducted by professional instructors, promoting the well-being of students.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FacilitiesPage;
