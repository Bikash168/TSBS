import Layout from '../components/Layout';
import Link from 'next/link';

export default function Academics() {
  const programs = [
    {
      title: 'B.Sc. Biotechnology',
      description: 'An undergraduate program providing foundational knowledge and hands-on skills in biotechnology, preparing students for careers in research, industry, and higher studies.'
    },
    {
      title: 'M.Sc. Biotechnology',
      description: 'A postgraduate program offering advanced training in molecular biology, genetic engineering, and bioinformatics to equip students for cutting-edge research and development roles.'
    },
    {
      title: 'M.Sc. Environmental Science',
      description: 'A comprehensive program that addresses environmental challenges and sustainability through scientific, technological, and policy-oriented approaches.'
    },
    {
      title: 'M.Sc. in Applied Microbiology',
      description: 'A specialized program focusing on the study of microorganisms and their applications in healthcare, agriculture, and industry.'
    },
    {
      title: 'M.Sc. Bioinformatics',
      description: 'An interdisciplinary program combining biology, computer science, and statistics to analyze and interpret biological data.'
    },
    {
      title: 'Master of Public Health',
      description: 'A program aimed at developing professionals with expertise in public health strategies, policy-making, and community health management.'
    },
    {
      title: 'Master of Social Work',
      description: 'A program designed to prepare students for impactful careers in social welfare, community development, and advocacy.'
    }
  ];


  return (
    <Layout title="Academics | TSBS">
      <main className="container mx-auto my-10 flex flex-col lg:flex-row">
        {/* Sidebar Menu */}
        <div className="w-full lg:w-1/4 p-6 bg-teal-50 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-600">Academics Menu</h2>
          <ul className="mt-6 space-y-3">
            {[
              { name: 'Courses', link: '/courses' }, // Correct route for the Courses page
              { name: 'Faculty', link: '/faculty' },
              { name: 'Publications', link: '/publications' },
              { name: 'Laboratories', link: '/laboratories' },
              { name: 'Library', link: '#library' },
              { name: 'Advisory Board', link: '#advisoryboard' },
              { name: 'Student Projects', link: '#studentprojects' },
              { name: 'Guest Seminars', link: '#guestseminars' },
              { name: 'Student Seminars', link: '#studentseminars' },
            ].map((item) => (
              <li key={item.name} className="hover:bg-teal-100 p-2 rounded-lg transition">
                <Link href={item.link} className="text-teal-600 hover:text-teal-800">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Main Content */}
        <section className="lg:w-3/4 lg:pl-8 mt-10 lg:mt-0">
          <h1 className="text-4xl font-bold text-teal-600">Academics at TSBS</h1>
          <p className="mt-4 text-lg text-gray-700">
            Explore the programs, facilities, and academic excellence at Trident School of Biotech Sciences.
          </p>

          {/* About TSBS */}
          <section id="abouttsbs" className="mt-10">
            <h2 className="text-2xl font-bold text-teal-600">About Trident School of Biotech Sciences</h2>
            <p className="mt-4 text-gray-700">
              The Trident School of Biotech Sciences (TSBS), a unit of TACT (Trust), commenced operations with the academic session 2002-03.
              This is a full-fledged college, distinct from the MCA/MBA college of TACT.
            </p>
            <p className="mt-2 text-gray-700">
              The first course introduced in TSBS was the M.Sc. (Biotechnology) course in the session 2002-03,
              simultaneously with the PG Department of Utkal University. Since then, this course has continued with approval from the State Government, duly affiliated with Utkal University, Bhubaneswar.
            </p>
            <p className="mt-2 text-gray-700">
              In 2004, TSBS introduced the B.Sc. (Hons) Biotechnology course. The institution is located at the permanent campus of the Trident Group
              (Trident Technoplex) at F2, Chandaka Industrial Estate, Bhubaneswar-24, in front of Infocity and behind Sailashree Vihar.
            </p>
            <p className="mt-2 text-gray-700">
              TSBS attracts students from across Eastern India, including Odisha, West Bengal, Jharkhand, Bihar, Assam, and the Northeast.
              In a recent survey, TSBS was adjudged the No.1 Biotechnology college in Eastern India.
            </p>
          </section>

          {/* Programs */}
          <section id="programs" className="mt-10">
            <h2 className="text-2xl font-bold text-teal-600">Programs We Offer</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {programs.map((program, idx) => (
                <li key={idx} className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all bg-white">
                  <h3 className="font-semibold text-teal-600">{program.title}</h3>
                  <p className="mt-2 text-gray-600">{program.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </Layout>
  );
}
