// pages/activities.js

import Layout from '../components/Layout';

const Activities = () => {
  return (
    <Layout>
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold text-teal-600 text-center mb-8">
            A Comprehensive Learning Journey at Trident
          </h1>
          <p className="text-lg text-black text-center mb-12">
            Education at Trident goes beyond textbooks and classrooms. Students have access to a wide range of resources that help them achieve their goals effectively. Whether it’s excelling in academics, developing their personalities, or enhancing specific skills, Trident ensures the best outcomes for its students. With guidance from supportive faculty and experienced senior students, every learner finds the encouragement they need to grow in their chosen paths.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-teal-600 mb-4">Providing Support to Students through Club Activities</h2>
              <p className="text-lg text-black mb-6">
                Students have the opportunity to be a part of various clubs that encompass both cultural and academic interests. These clubs are designed to help students develop their skills, showcase their talents, and engage in meaningful activities outside the classroom. Each club is mentored by a professor and a faculty coordinator, ensuring proper guidance and structure. The leadership and day-to-day management of the clubs are handled by a governing body, which consists of eight dedicated student members.
              </p>
              <a href="#know-more" className="text-blue-500 hover:text-blue-700">Know more</a>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-teal-600 mb-4">Co-Curricular</h2>
              <p className="text-lg text-black mb-6">
                Trident School of Biotechnology has six active student clubs, each guided by a faculty coordinator and managed by a governing body of students, primarily from the final and pre-final years. Trident provides seed funding to support these clubs, enabling them to focus on activities that go beyond the regular syllabus. These initiatives promote self-learning, skill development in specialized fields, and meaningful interactions with experts from both industry and academia.
              </p>
              <a href="#know-more" className="text-blue-500 hover:text-blue-700">Know more</a>
            </div>
          </div>

          {/* Agro-Vatika Section */}
          <section id="agro-vatika" className="mt-12">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Agro-Vatika</h3>
            <p className="text-lg text-black mb-4">
              <strong>Overview:</strong> Agrovatika focuses on promoting functional foods, herbal diets, organic farming, and herbal kitchen gardens through a student-led mass awareness program. The club members organize campaigns to educate people about the importance of maintaining herbal gardens, emphasizing healthy living while supporting the conservation of rare and endemic plant and forest resources.
            </p>
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Vision</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Help young people understand why sustainable farming is important for food security, the environment, and communities.</li>
                <li>Encourage creative ideas for using natural methods to solve health and nutrition problems.</li>
                <li>Involve the youth in activities and programs that spread knowledge about sustainable farming and healthy living.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Mission</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Promote awareness about the preservation and sustainable use of ethno-economic plants with significant commercial value.</li>
                <li>Collaborate with college clubs and external organizations to create initiatives focused on protecting and utilizing valuable plant resources.</li>
                <li>Encourage research and innovation among students to explore eco-friendly practices that support the cultivation and commercialization of these plants.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Objectives</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Foster a strong connection with nature for the betterment of society.</li>
                <li>Encourage the adoption of sustainable, eco-friendly farming practices and the use of functional foods.</li>
                <li>Promote the practice of maintaining herbal kitchen gardens at the household level, helping to spread this habit within communities.</li>
                <li>Increase awareness of traditional medicine and the importance of intellectual property rights, contributing to the preservation of endangered plant species.</li>
                <li>Inspire younger generations to take responsibility for food production to meet the growing demands of the global population.</li>
              </ul>
            </div>
          </section>

          {/* Bio Reach Section */}
          <section id="bio-reach" className="mt-12">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Bio Reach</h3>
            <p className="text-lg text-black mb-4">
              <strong>Overview:</strong> The Bio-reach Club was established to offer practical biological solutions to underserved communities. Its mission is to enhance livelihoods by improving resource utilization, creating new opportunities, and addressing rural development challenges to reduce societal inequality. By integrating biological solutions with digital connectivity, the club aims to drive progress in a country facing issues of poverty and malnutrition, while leveraging its rich biodiversity.
            </p>
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Vision</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Inspire young individuals to integrate social responsibility into their professional lives, encouraging them to actively contribute to society through sustainable practices.</li>
                <li>Encourage young people to be socially responsible and connect their professional goals with eco-friendly practices that help society and the environment.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Mission</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Inspire individuals to become change-makers by coming up with new ideas and solutions that help create a more equal society.</li>
                <li>Promote creativity and resourcefulness, encouraging opportunities to solve key social and environmental problems for a better future.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Objectives</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Help people understand the delicate social structure of our country by creating models based on developing nations.</li>
                <li>Attract skilled and dedicated volunteers to work as social entrepreneurs.</li>
                <li>Create and discuss simple biological solutions to address the connection between social and environmental issues.</li>
                <li>Teach ethics and morality in science, ensuring its sustainability while identifying and solving complex societal problems.</li>
                <li>Engage underprivileged youth in nation-building by fostering community partnerships and exploring the country’s rich biodiversity resources.</li>
              </ul>
            </div>
          </section>
          
          {/* Bio-Medica Section */}
          <section id="bio-medica" className="mt-12">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Bio-Medica</h3>
            <p className="text-lg text-black mb-4">
              The goal is to raise awareness about developing new strains of microorganisms designed for creating innovative medicines. This includes exploring the methods, technologies, and ethical issues related to genetic engineering, microbiology, and biotechnology.
            </p>
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Vision</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Build an informed community that understands and values the crucial role of microbial strains in advancing medicine.</li>
                <li>Foster collaboration among the public, researchers, and industry professionals to combine scientific progress and ethical practices in transforming healthcare.</li>
                <li>Encourage knowledge sharing and innovation to speed up the development of safe, effective microbial-based medicines.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Mission</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Raise awareness about creating unique microbial strains for making new medicines.</li>
                <li>Educate and involve people in understanding the methods, technologies, and ethical issues in genetic engineering, microbiology, and biotechnology.</li>
                <li>Share the latest developments in these fields to keep people informed.</li>
                <li>Encourage discussions and teamwork to show how microbial strains can help develop new treatments for diseases.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-teal-600 mb-2">Objectives</h4>
              <ul className="list-disc pl-6 text-black">
                <li>Help students and professionals understand the impact of microorganisms on medicine and healthcare.</li>
                <li>Identify promising microbial strains that can create useful medicines.</li>
                <li>Foster collaboration with experts in the field of biotechnology to explore innovative solutions for global health problems.</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
