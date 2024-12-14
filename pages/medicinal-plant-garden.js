import Layout from '../components/Layout';
import Link from 'next/link';

const MedicinalPlantGarden = () => {
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
                <Link href="/laboratories" className="hover:underline">
                Laboratories
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">Medicinal Plant Garden</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Medicinal Plant Garden</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Garden</h2>
            <p className="text-lg text-gray-700 mb-4">
              Trident School of Biotech Sciences has taken proactive steps to educate the youth on the importance of conserving natural resources for sustainable ecosystem dynamics. As a priority, TSBS has developed a ‘Medicinal Plant Garden’ that harbors endemic and economically efficient plant species. The garden houses plant species like Withania somnifera (Aswagandha or Indian ginseng), Adhatoda vasica (Vasaka or Malabar Nut), Swertia chirata (Chirayata), Pandanus amaryllifolius (Annapurna), Cissus quadrangularis (Hadjod), Vinca rosea (Sadabahari), Ocimum tenuiflorum (Tulsi), Aloe vera (Aloe), Bryophyllum pinnatum (Hemsagar), Piper longum (Pippali), Rauvolfia serpentina (Sarpagandha), and Acrous calamus (Vacha), to name a few. The different parts of these plants (roots, leaves, bark, and other portions) have proven medicinal and economic potential. Efforts are in full swing to make the garden ideal for instigating a student-centric ‘Herbal Literacy Mission’ through co-curricular club activities and include these plant species under the ‘Trident Research’ initiative.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              TSBS faculties, under the leadership of Assistant Professor Mr. Anshuman Sarangi, are currently working to develop a tissue culture unit for the production of saplings and cultivating Musa acuminate (Banana) within the scope of the medicinal plant garden. This initiative aims to realize commercial production in the future.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">List of Medicinal Plants</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li><strong>Withania somnifera</strong> (Aswagandha)</li>
              <li><strong>Adhatoda vasica</strong> (Vasaka)</li>
              <li><strong>Swertia chirata</strong> (Chirayata)</li>
              <li><strong>Pandanus amaryllifolius</strong> (Annapurna)</li>
              <li><strong>Cissus quadrangularis</strong> (Hadjod)</li>
              <li><strong>Vinca rosea</strong> (Sadabahari)</li>
              <li><strong>Ocimum tenuiflorum</strong> (Tulsi)</li>
              <li><strong>Aloe vera</strong> (Aloe)</li>
              <li><strong>Bryophyllum pinnatum</strong> (Hemsagar)</li>
              <li><strong>Piper longum</strong> (Pippali)</li>
              <li><strong>Rauvolfia serpentina</strong> (Sarpagandha)</li>
              <li><strong>Acrous calamus</strong> (Vacha)</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MedicinalPlantGarden;
