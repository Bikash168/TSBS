import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link'; // Import Link from next/link

const MScEnvironmentalScience = () => {
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
              <li className="text-gray-500">M.Sc. in Environmental Science</li>
            </ul>
          </nav>
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">M.Sc. in Environmental Science</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Program</h2>
            <p className="text-lg text-gray-700 mb-4">
              The M.Sc. in Environmental Science program is designed to provide students with both theoretical knowledge and practical skills to understand and address environmental challenges. This program covers key areas such as Environmental Management, Climate Change, Biodiversity Conservation, Pollution Control, Sustainable Development, and Environmental Impact Assessment.
            </p>
            <p className="text-lg text-gray-700">
              With a strong emphasis on practical learning and research, the program equips students to analyze and solve environmental issues effectively, preparing them for careers in academia, industry, or government organizations.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Objectives</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                To provide an in-depth understanding of environmental processes, sustainability, and ecosystem dynamics.
              </li>
              <li className="text-lg text-gray-700">
                To develop skills in environmental assessment, monitoring, and management strategies for pollution control and resource conservation.
              </li>
              <li className="text-lg text-gray-700">
                To promote research and innovation in solving environmental challenges through advanced tools and technologies.
              </li>
              <li className="text-lg text-gray-700">
                To inculcate a sense of responsibility and awareness regarding global environmental issues and sustainable practices.
              </li>
              <li className="text-lg text-gray-700">
                To prepare students for interdisciplinary collaboration and leadership roles in the field of environmental science.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Student Development</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Gaining hands-on experience in fieldwork, laboratory experiments, and data analysis to address real-world environmental challenges.
              </li>
              <li className="text-lg text-gray-700">
                Developing skills in using advanced software and tools for environmental modeling, GIS, and remote sensing.
              </li>
              <li className="text-lg text-gray-700">
                Enhancing research capabilities by engaging with current environmental studies and contributing to scientific publications.
              </li>
              <li className="text-lg text-gray-700">
                Building effective communication and teamwork abilities to work in diverse and multidisciplinary environments.
              </li>
              <li className="text-lg text-gray-700">
                Cultivating leadership qualities and a proactive approach toward environmental stewardship.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MScEnvironmentalScience;
