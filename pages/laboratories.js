import Layout from '../components/Layout';
import Link from 'next/link';

export default function Laboratories() {
  return (
    <Layout title="Laboratories | TSBS">
      <main className="container mx-auto my-10 flex flex-col lg:flex-row">
        {/* Sidebar Menu */}
        <div className="w-full lg:w-1/4 p-6 bg-teal-50 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-600">Laboratories Menu</h2>
          <ul className="mt-6 space-y-3">
            {[
              { name: 'General Biotechnology Lab', link: '/general-biotech-lab' },
              { name: 'Molecular Biology Lab', link: '/molecular-biology-lab' },
              { name: 'Plant Tissue Culture Lab', link: '/plant-tissue-culture-lab' },
              { name: 'Microbiology Lab', link: '/microbiology-lab' },
              { name: 'Chemistry Lab', link: '/chemistry-lab' },
              { name: 'Biocomputing Lab', link: '/biocomputing-lab' },
              { name: 'Medicinal Plant Garden', link: '/medicinal-plant-garden' },
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
              <li>
                <Link href="/laboratories" className="hover:underline">
                  Laboratories
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">Overview</li>
            </ul>
          </nav>

          {/* Laboratories Overview */}
          <section id="laboratories-overview" className="mt-10">
            <h1 className="text-2xl font-bold text-teal-600">Laboratories at TSBS</h1>
            <p className="mt-4 text-gray-700">
              Biotechnology is at the crossroads of various scientific fields, and at Trident School of Biotech Sciences (TSBS), we emphasize interdisciplinary learning. Our practical-based curriculum equips students with specialized skills to work in industries, research labs, and academia. Through our hands-on approach, students gain insights into downstream applications of experiments and their relevance in basic research, product development, and process optimization.
            </p>
            <p className="mt-4 text-gray-700">
              At TSBS, we train students in various areas such as animal cell culture, microbial isolate culture from environmental samples, transcript expression analysis, and sequence/structure analysis using bioinformatics tools. The focus is to provide industry-relevant laboratory skills by interfacing with instruments, software, and wet lab experiments.
            </p>
            <p className="mt-4 text-gray-700">
              The laboratories at TSBS are designed to offer a holistic understanding of practical concepts in Biotechnology and Microbiology. Our laboratories include:
            </p>
            <ul className="mt-4 list-disc pl-6 text-gray-700">
              <li>General Biotechnology/Biochemistry</li>
              <li>Molecular Biology</li>
              <li>Bioinstrumentation</li>
              <li>Microbiology</li>
              <li>Plant Tissue Culture</li>
              <li>Bioinformatics</li>
              <li>Chemistry</li>
            </ul>
            <p className="mt-4 text-gray-700">
              All labs are equipped with state-of-the-art equipment necessary for teaching university-level courses, ensuring that students gain the skills they need for the real world. You can explore the individual equipment available in each laboratory by clicking the respective links below.
            </p>
          </section>

          {/* Laboratory Links */}
          <section id="laboratory-links" className="mt-10">
            <h2 className="text-xl font-semibold text-teal-600">Available Labs</h2>
            <ul className="mt-4 space-y-3 text-teal-600">
              <li>
                <Link href="/general-biotech-lab" className="hover:text-teal-800">General Biotech Lab</Link>
              </li>
              <li>
                <Link href="/molecular-biology-lab" className="hover:text-teal-800">Molecular Biology Lab</Link>
              </li>
              <li>
                <Link href="/plant-tissue-culture-lab" className="hover:text-teal-800">Plant Tissue Culture Lab</Link>
              </li>
              <li>
                <Link href="/microbiology-lab" className="hover:text-teal-800">Microbiology Lab</Link>
              </li>
              <li>
                <Link href="/chemistry-lab" className="hover:text-teal-800">Chemistry Lab</Link>
              </li>
              <li>
                <Link href="/biocomputing-lab" className="hover:text-teal-800">Biocomputing Lab</Link>
              </li>
              <li>
                <Link href="/medicinal-plant-garden" className="hover:text-teal-800">Medicinal Plant Garden</Link>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </Layout>
  );
}
