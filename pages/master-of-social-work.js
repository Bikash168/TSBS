import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link'; // Import Link from next/link

const MasterOfSocialWork = () => {
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
              <li className="text-gray-500">Master of Social Work</li>
            </ul>
          </nav>
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Master of Social Work (MSW)</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-4">
              This program is designed to prepare students for careers in social work and related fields. It provides the essential knowledge, skills, and hands-on experience needed to address social issues and improve the lives of individuals, families, and communities. The program also helps students develop the right mindset and abilities to deliver effective human services, with a global outlook.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Objectives</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                To provide a strong theoretical foundation in social work principles and practices.
              </li>
              <li className="text-lg text-gray-700">
                To equip students with practical skills for effective intervention in social issues.
              </li>
              <li className="text-lg text-gray-700">
                To foster a global perspective in addressing social challenges while being sensitive to local cultural contexts.
              </li>
              <li className="text-lg text-gray-700">
                To nurture critical thinking and analytical abilities for designing impactful social programs.
              </li>
              <li className="text-lg text-gray-700">
                To develop a sense of social responsibility and ethical conduct in all aspects of social work practice.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Student Development</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Enhanced interpersonal and communication skills for effective client interaction.
              </li>
              <li className="text-lg text-gray-700">
                Development of leadership skills to manage teams and projects in the social work sector.
              </li>
              <li className="text-lg text-gray-700">
                Proficiency in applying research methods and evidence-based practices to solve social issues.
              </li>
              <li className="text-lg text-gray-700">
                Hands-on experience through internships and fieldwork to bridge theory and practice.
              </li>
              <li className="text-lg text-gray-700">
                Cultivation of cultural sensitivity and inclusivity to work effectively in diverse settings.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MasterOfSocialWork;
