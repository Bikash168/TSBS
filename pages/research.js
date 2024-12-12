import React from 'react';
import Layout from '../components/Layout';

const ResearchPage = () => {
  return (
    <Layout>
      {/* Research Works Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-teal-600 text-center">
          TSBS Research: Building a Sustainable Future through Innovation
        </h2>
        <p className="text-lg text-black mt-4 text-center">
          Trident School of Biotech Sciences (TSBS) was originally established as a teaching institute in affiliation with Utkal University. Over the years, it has emerged as a prominent research institution, emphasizing sustainability through visionary leadership and an innovative research culture.
        </p>
      </section>

      {/* Objectives Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Objectives</h3>
        <p className="text-lg text-black mt-4">
          The key objectives are to excel in academic, industrial, and societal research by adopting interdisciplinary strategies. This involves publishing in respected journals, organizing lectures, seminars, and workshops, and fostering global research collaborations. They also focus on teaching technology-based courses, managing funded projects in bioinformatics and health, and forming alliances with international experts and research institutions.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Vision</h3>
        <p className="text-lg text-black mt-4">
          Trident School of Biotech Sciences aims to be a leading educational institution recognized regionally, nationally, and internationally for its research. We strive to create an environment that promotes innovative ideas and solutions to the challenges faced in health, agriculture, the environment, and society.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Mission</h3>
        <p className="text-lg text-black mt-4">
          Trident School of Biotech Sciences strives to create an engaging academic atmosphere that inspires students to become future leaders in biotechnology. We emphasize strong student-teacher engagement and foster interdisciplinary research collaborations. By offering complete training at every academic level and establishing partnerships with national and international institutions, we aim to drive research that addresses global health, agriculture, and environmental challenges, all while cultivating a passion for research in our students.
        </p>
      </section>

      {/* Thrust Areas & Research Groups */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Thrust Areas & Research Groups</h3>
        <div className="mt-8 space-y-8">
          {/* Herbal Therapeutics */}
          <article className="space-y-4">
            <h4 className="text-2xl font-semibold text-teal-600">Herbal Therapeutics</h4>
            <p className="text-lg text-black mt-4">
              Herbal Therapeutics research examines the medicinal properties of plants, identifying bioactive compounds and evaluating their effectiveness in treating various health conditions. The goal is to validate traditional knowledge and incorporate herbal remedies into modern healthcare practices.
            </p>
            <h5 className="mt-2 font-semibold text-teal-600">Research Team:</h5>
            <ul className="list-disc pl-6">
              <li>Dr. Manisha Mohapatra</li>
              <li>Dr. Somanatha Jena</li>
              <li>Ms. Sanjana Singh</li>
              <li>Ms. Bandita Swain</li>
            </ul>
          </article>

          {/* Probiotics / Prebiotics / Nutraceuticals */}
          <article className="space-y-4">
            <h4 className="text-2xl font-semibold text-teal-600">Probiotics / Prebiotics / Nutraceuticals</h4>
            <p className="text-lg text-black mt-4">
              Research in probiotics, prebiotics, nutraceuticals, and enzymes focuses on understanding their role in modulating gut microbiota, boosting the immune system, and improving metabolic health. This research aims to explore their therapeutic potential and optimize their use in enhancing overall health and well-being.
            </p>
            <h5 className="mt-2 font-semibold text-teal-600">Research Team:</h5>
            <ul className="list-disc pl-6">
              <li>Dr. Anshuman Sarangi</li>
              <li>Dr. Ashok Kumar Sarangi</li>
              <li>Mr. Alok Ranjan Nayak</li>
            </ul>
          </article>

          {/* Environmental Biotech */}
          <article className="space-y-4">
            <h4 className="text-2xl font-semibold text-teal-600">Environmental Biotech (Water and Biodegradable Waste Management)</h4>
            <p className="text-lg text-black mt-4">
              Environmental biotechnology research in water and biodegradable waste management explores advanced methods like microbiome engineering, Black Soldier Fly utilization, vermicomposting, and microbial composting. These approaches leverage microbial communities and insect bioconversion to improve waste degradation, nutrient recycling, and sustainable resource recovery, with the goal of reducing environmental pollution and supporting ecological balance.
            </p>
            <h5 className="mt-2 font-semibold text-teal-600">Research Team:</h5>
            <ul className="list-disc pl-6">
              <li>Dr. Deoraj Sharma</li>
              <li>Dr. Somanatha Jena</li>
              <li>Dr. Arup Sarkar</li>
            </ul>
          </article>

          {/* Synthetic Greening */}
          <article className="space-y-4">
            <h4 className="text-2xl font-semibold text-teal-600">Synthetic Greening</h4>
            <p className="text-lg text-black mt-4">
              Research in synthetic greening using greenhouse and hydroponics techniques seeks to transform sustainable agriculture by optimizing controlled environments for plant growth. This approach focuses on efficient resource use, reducing environmental impact, and enabling year-round production, providing innovative solutions to food security challenges while promoting eco-friendly farming practices.
            </p>
            <h5 className="mt-2 font-semibold text-teal-600">Research Team:</h5>
            <ul className="list-disc pl-6">
              <li>Ms. Chirasmita Mishra</li>
              <li>Ms. Swetaleena Senapati</li>
              <li>Dr. Manisha Mahapatra</li>
              <li>Dr. Somanatha Jena</li>
              <li>Dr. Deoraj Sharma</li>
            </ul>
          </article>

          {/* Bio-Energy */}
          <article className="space-y-4">
            <h4 className="text-2xl font-semibold text-teal-600">Bio-Energy (Bio-Hydrogen)</h4>
            <p className="text-lg text-black mt-4">
              Research on biohydrogen production through microbial fuel cells (MFC) and dark fermentation from wastewater focuses on optimizing microbial communities to improve efficiency and sustainability. This method uses commensal microbiome engineering to convert organic waste into hydrogen gas, providing a renewable energy source while addressing environmental issues related to wastewater treatment.
            </p>
          </article>

          {/* Public Health & Immunology */}
          <article className="space-y-4">
            <h4 className="text-2xl font-semibold text-teal-600">Public Health & Immunology</h4>
            <p className="text-lg text-black mt-4">
              Research in public health and immunology related to Leishmania infection and vaccination focuses on understanding how the immune system, particularly phagocytes, responds to the infection. This includes studying how different phagocytes like macrophages and dendritic cells interact with Leishmania parasites, influencing both the course of the infection and the effectiveness of vaccines.
            </p>
            <h5 className="mt-2 font-semibold text-teal-600">Research Team:</h5>
            <ul className="list-disc pl-6">
              <li>Dr. Arup Sarkar</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Collaborations & Research Linkage</h3>
        <p className="text-lg text-black mt-4">
          TSBS has built strong partnerships with leading national and international institutions. These collaborations foster shared research infrastructure and promote cooperation among various stakeholders.
        </p>
      </section>

      {/* Research Committees Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-teal-600">Research Committees</h3>
        <div className="mt-8 space-y-8">
          <article>
            <h4 className="text-2xl font-semibold text-teal-600">Institutional Biosafety Committee (IBSC)</h4>
            <p className="text-lg text-black mt-4">
              The IBSC oversees and reviews projects involving Genetically Engineered Organisms (GEOs) to ensure ethical, safety, and legal compliance. This body monitors experimental activities involving recombinant DNA technology, genetically modified organisms (GMOs), and other bioengineering initiatives to prevent biosafety risks.
            </p>
          </article>

          <article>
            <h4 className="text-2xl font-semibold text-teal-600">Institutional Ethical Committee (IEC)</h4>
            <p className="text-lg text-black mt-4">
              The IEC is responsible for overseeing ethical standards in research involving human and animal subjects. It ensures that all studies adhere to ethical guidelines and maintain high research integrity.
            </p>
          </article>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <p className="text-lg text-black mt-4 text-center">
          Trident School of Biotech Sciences is committed to delivering cutting-edge research and cultivating the next generation of biotechnology leaders. We continue to expand our knowledge, resources, and collaborations to address global challenges in sustainability and health.
        </p>
      </section>
    </Layout>
  );
};

export default ResearchPage;
