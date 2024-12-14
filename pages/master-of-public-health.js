import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link'; // Import Link from next/link

const MasterOfPublicHealth = () => {
  return (
    <Layout>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <li>
                <Link href="/courses" className="hover:underline">
                  Courses
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">Master of Public Health (MPH)</li>
            </ul>
          </nav>
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Master of Public Health (MPH)</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Master of Public Health (MPH) program is gaining recognition as a crucial academic qualification for individuals pursuing careers in public health. With rising demand for professionals in key areas like epidemiology, biostatistics, surveillance, environmental health management, and program planning, both domestically and internationally, there is a critical need for qualified personnel. Establishing a dedicated Public Health Cadre has been identified as a key strategy in addressing these needs. 
            </p>
            <p className="text-lg text-gray-700">
              The program emphasizes health promotion and disease prevention to reduce healthcare costs, equipping students with the necessary knowledge and skills to manage public health challenges, particularly in the Indian context. The curriculum includes a range of teaching methods such as simulations, lectures, group discussions, case studies, role-playing, and practical fieldwork.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Objectives</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                To foster an interdisciplinary and collaborative environment where students and faculty from diverse backgrounds, expertise, and interests can work together.
              </li>
              <li className="text-lg text-gray-700">
                To create a supportive learning environment that helps students acquire the knowledge, skills, and values necessary for success in public health.
              </li>
              <li className="text-lg text-gray-700">
                To encourage the identification and achievement of each student’s personal and professional goals in the field of public health.
              </li>
              <li className="text-lg text-gray-700">
                To offer a wide range of public health opportunities through applied learning, equipping students for careers in the public health sector.
              </li>
              <li className="text-lg text-gray-700">
                To continuously improve population health by providing services and consultations to public health agencies and organizations at local, state, national, and global levels.
              </li>
              <li className="text-lg text-gray-700">
                To cultivate an academic atmosphere where faculty and students contribute to advancing public health research and practice.
              </li>
              <li className="text-lg text-gray-700">
                To implement and maintain a robust program evaluation process for ongoing improvement and development.
              </li>
              <li className="text-lg text-gray-700">
                To actively engage students in developing a deep understanding of public health professionalism.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Outcomes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Analytical and evaluation skills for gathering and interpreting data.
              </li>
              <li className="text-lg text-gray-700">
                Policy development and planning skills to tackle public health challenges.
              </li>
              <li className="text-lg text-gray-700">
                Communication skills for effectively advocating and sharing public health information.
              </li>
              <li className="text-lg text-gray-700">
                Financial management and planning skills for overseeing public health programs.
              </li>
              <li className="text-lg text-gray-700">
                Leadership skills to effectively lead teams of public health professionals.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MasterOfPublicHealth;
