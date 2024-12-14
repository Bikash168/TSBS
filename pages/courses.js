import Layout from '../components/Layout';
import Link from 'next/link';

export default function Academics() {
  return (
    <Layout title="Academics | TSBS">
      <main className="container mx-auto my-10 flex flex-col lg:flex-row">

        {/* Sidebar Menu */}
        <div className="w-full lg:w-1/4 p-6 bg-teal-50 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-600">Courses Menu</h2>
          <ul className="mt-6 space-y-3">
            {[
              { name: 'B.Sc in Biotechnology', link: '/b-sc-in-biotechnology' },
              { name: 'M.Sc in Biotechnology', link: '/m-sc-in-biotechnology' },
              { name: 'M.Sc in Environmental Science', link: '/m-sc-in-environmental-science' },
              { name: 'M.Sc. in Applied Microbiology', link: '/m-sc-in-applied-microbiology' },
              { name: 'M.Sc. Bioinformatics', link: '/m-sc-in-bioinformatics' },
              { name: 'Master of Public Health', link: '/master-of-public-health' },
              { name: 'Master of Social Work', link: '/master-of-social-work' },
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
          {/* Breadcrumb Navigation */}
          <nav className="w-full mb-6 text-sm text-teal-600">
            <ul className="flex space-x-2">
              <li>
                <Link href="/" className="hover:underline flex items-center">
                  <span className="mr-1">🏠</span> Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/academics" className="hover:underline">
                  Academics
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">Courses</li>
            </ul>
          </nav>

          {/* Undergraduate Program */}
          <section id="undergraduate-program" className="mt-10">
            <h1 className="text-2xl font-bold text-teal-600">Undergraduate Programs</h1>
            <p className="mt-4 text-gray-700">
              TSBS offers a Bachelor’s (Honors) degree in Biotechnology, providing students with a strong foundation in subjects like Chemistry, Environmental Science, Plant Diversity and Physiology, Cell Biology, Genetics, and Animal Diversity and Physiology during the first year. In the next two years, the focus moves to key biotechnology topics. The curriculum, based on Utkal University’s syllabus, includes specialized areas such as Biostatistics, Computer Applications, Biotechniques, Immunology, Biochemistry, Molecular Biology, Genetic Engineering, Plant and Animal Biotechnology, Bioinformatics, Genomics and Proteomics, Bioprocess Engineering, and Bio-entrepreneurship. This well-planned curriculum helps students gain the knowledge and skills needed to excel in biotechnology and earn their honors degree.
            </p>
          </section>

          {/* Postgraduate Programs */}
          <section id="postgraduate-programs" className="mt-10">
            <h1 className="text-2xl font-bold text-teal-600">Postgraduate Programs</h1>

            {/* M.Sc in Biotechnology */}
            <section id="msc-biotechnology" className="mt-6">
              <h2 className="text-xl font-semibold text-teal-600">M.Sc in Biotechnology</h2>
              <p className="mt-4 text-gray-700">
                The Master’s degree program in Biotechnology at TSBS combines classroom teaching with practical laboratory work and industrial exposure. This two-year course focuses on advanced biology knowledge and the use of technology in biotechnology. Students will learn how living organisms are used to create controlled processes and products. The program covers subjects like Genetics, Microbiology, Biochemistry, Genetic Engineering, and Cancer Biology. Along with gaining detailed knowledge, students will also develop problem-solving and critical thinking skills, helping them tackle challenges in the biotechnology field. The program includes project internships and research opportunities in collaboration with leading R&D institutes.
              </p>
            </section>

            {/* M.Sc in Applied Microbiology */}
            <section id="msc-applied-microbiology" className="mt-6">
              <h2 className="text-xl font-semibold text-teal-600">M.Sc in Applied Microbiology</h2>
              <p className="mt-4 text-gray-700">
                M.Sc. Applied Microbiology focuses on the applied aspects of microbiology along with foundational knowledge. The program covers areas such as Food and Dairy Microbiology, Medical Microbiology, Recombinant DNA Technology, Environmental Microbiology, Microbial Biotechnology, Agricultural Microbiology, Microbial Physiology, and Fermentation Technology. Students gain extensive practical experience, equipping them with skills for careers in research and industry. This program prepares students to face real-world challenges through in-depth theoretical and practical knowledge imparted in every semester.
              </p>
            </section>

            {/* M.Sc in Environmental Science */}
            <section id="msc-environmental-science" className="mt-6">
              <h2 className="text-xl font-semibold text-teal-600">M.Sc in Environmental Science</h2>
              <p className="mt-4 text-gray-700">
                The M.Sc in Environmental Science program is designed to address the growing environmental challenges and promote sustainable development. The program provides an interdisciplinary approach to understanding environmental systems and proposing sustainable solutions. Topics include pollution, ecosystem management, human-environment interactions, and policy development. Students are equipped to tackle environmental issues and contribute to sustainable planning and development strategies.
              </p>
            </section>

            {/* Master of Public Health */}
            <section id="master-of-public-health" className="mt-6">
              <h2 className="text-xl font-semibold text-teal-600">Master of Public Health</h2>
              <p className="mt-4 text-gray-700">
                The Master of Public Health (MPH) program prepares professionals to address public health challenges in fields such as epidemiology, biostatistics, environmental health management, and program evaluation. The program emphasizes health promotion, disease prevention, and practical skills through interactive teaching methods like case studies, simulations, and fieldwork. Graduates are equipped to contribute to public health policy and program development, particularly in the Indian context.
              </p>
            </section>

            {/* Master of Social Work */}
            <section id="master-of-social-work" className="mt-6">
              <h2 className="text-xl font-semibold text-teal-600">Master of Social Work</h2>
              <p className="mt-4 text-gray-700">
                The Master of Social Work (MSW) program prepares students for professional careers in social work and related fields. The curriculum provides the knowledge, skills, and practical experience needed to address social issues and improve the well-being of individuals, families, and communities. Emphasizing global standards, the program fosters critical thinking and problem-solving abilities, preparing graduates for impactful careers in social service.
              </p>
            </section>
          </section>
        </section>
      </main>
    </Layout>
  );
}
