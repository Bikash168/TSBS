import { useState } from "react";
import Layout from "../components/Layout";

export default function GrievancePage() {
  const [formData, setFormData] = useState({
    grievanceType: "",
    name: "",
    department: "",
    description: "",
    date: "",
    contact: "",
    preferredResolution: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form Submitted");
  };

  return (
    <Layout title="Grievance Redressal">
      <div className="bg-white text-black">
        <h1 className="text-3xl font-bold text-teal-600 text-center mb-6">Grievance Redressal System</h1>

        {/* Grievance Redressal System Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Grievance Redressal System Overview</h2>
          <p className="text-lg">
            Trident Group of Institutions (TSBS) has established a robust and efficient Grievance Redressal System to address the concerns of students, staff, and other stakeholders. The system is designed to ensure that grievances are handled in a timely and fair manner, contributing to a positive and supportive academic environment.
          </p>
        </section>

        {/* Grievance Redressal Forums */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Grievance Redressal Forums</h2>

          {/* General Grievance Redressal Committee */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-teal-600">General Grievance Redressal Committee (G-GRC)</h3>
            <p className="text-lg">
              The General Grievance Redressal Committee addresses grievances that do not fall under specific categories handled by the Women Grievance or SC/ST Grievance Redressal Committees.
            </p>
            <p className="mt-4"><strong>Types of Grievances:</strong></p>
            <ul className="list-disc pl-6">
              <li>Harassment (physical or mental)</li>
              <li>Delays/non-payment of salaries</li>
              <li>Welfare and safety concerns</li>
              <li>Feedback on academic/non-academic issues</li>
            </ul>
            <p className="mt-4"><strong>Composition:</strong></p>
            <ul className="list-disc pl-6">
              <li>Representative from senior administration</li>
              <li>Professor-level faculty member</li>
              <li>Senior faculty members</li>
              <li>Non-teaching staff representative</li>
              <li>Student committee member</li>
            </ul>
            <p className="mt-4"><strong>Grievance Lodging and Redressal Procedure:</strong></p>
            <ul className="list-disc pl-6">
              <li>Submit grievances via written form, including an ID number.</li>
              <li>Complaints can be submitted in person, in writing, or by telephone (offline and online).</li>
              <li>The Grievance Cell will ensure grievances are resolved within the specified time frame.</li>
            </ul>
          </div>

          {/* Women Grievance Redressal Committee */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-teal-600">Women Grievance Redressal Committee (W-GRC)</h3>
            <p className="text-lg">
              The Women Grievance Redressal Committee focuses on issues related to sexual harassment and general grievances affecting female students and staff.
            </p>
            <p className="mt-4"><strong>Types of Women’s Grievances:</strong></p>
            <ul className="list-disc pl-6">
              <li>Sexual harassment</li>
              <li>Mental harassment</li>
              <li>Workload and conditions</li>
              <li>Pay and benefits</li>
            </ul>
            <p className="mt-4"><strong>Structure:</strong></p>
            <ul className="list-disc pl-6">
              <li>Senior management representative</li>
              <li>Male representative from administrative level</li>
              <li>Legal advisor</li>
              <li>Social worker</li>
              <li>Female faculty representative</li>
              <li>Non-teaching staff and student committee members</li>
            </ul>
            <p className="mt-4"><strong>Grievance Lodging and Redressal Procedure:</strong></p>
            <ul className="list-disc pl-6">
              <li>Complaints can be submitted through the complaint box or directly to ICC members.</li>
              <li>The committee meets regularly to address grievances, with resolutions communicated within reasonable timeframes.</li>
            </ul>
          </div>

          {/* SC/ST Grievance Redressal Committee */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-teal-600">SC/ST Grievance Redressal Committee (S-GRC)</h3>
            <p className="text-lg">
              The SC/ST Grievance Redressal Committee ensures accountability and responsiveness for grievances related to Scheduled Caste (SC) and Scheduled Tribe (ST) students and staff.
            </p>
            <p className="mt-4"><strong>Types of SC/ST Grievances:</strong></p>
            <ul className="list-disc pl-6">
              <li>Harassment and discrimination based on caste</li>
              <li>Denial of rights or resources</li>
              <li>Violence or humiliation based on caste identity</li>
            </ul>
            <p className="mt-4"><strong>Functions:</strong></p>
            <ul className="list-disc pl-6">
              <li>Encourages SC/ST students and staff to voice concerns</li>
              <li>Ensures that grievances are addressed promptly</li>
              <li>Conducts investigations and reports findings</li>
            </ul>
            <p className="mt-4"><strong>Grievance Lodging and Redressal Procedure:</strong></p>
            <ul className="list-disc pl-6">
              <li>Grievances are reported in writing to the SPOC/Coordinator.</li>
              <li>The grievance is reviewed, and action is taken within a designated timeframe.</li>
              <li>The decision is communicated, and the complainant can appeal if dissatisfied.</li>
            </ul>
          </div>
        </section>

        {/* Grievance Lodging Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Grievance Lodging Form</h2>
          <p className="text-lg mb-4">
            To lodge a grievance, please fill out the form below:
          </p>

          <form onSubmit={handleSubmit} className="bg-teal-50 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-teal-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md text-teal-600"
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-lg font-medium text-teal-600">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md text-teal-600"
              />
            </div>

            <div>
              <label htmlFor="grievanceType" className="block text-lg font-medium text-teal-600">Grievance Type</label>
              <select
                id="grievanceType"
                name="grievanceType"
                value={formData.grievanceType}
                onChange={(e) => setFormData({ ...formData, grievanceType: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md text-teal-600"
              >
                <option value="">Select</option>
                <option value="general">General</option>
                <option value="women">Women</option>
                <option value="scst">SC/ST</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-lg font-medium text-teal-600">Description of the Grievance</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md text-teal-600"
              ></textarea>
            </div>

            <div>
              <label htmlFor="date" className="block text-lg font-medium text-teal-600">Date of Incident</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md text-teal-600"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-lg font-medium text-teal-600">Contact Information</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md text-teal-600"
              />
            </div>

            <div>
              <label htmlFor="preferredResolution" className="block text-lg font-medium text-teal-600">Preferred Resolution</label>
              <textarea
                id="preferredResolution"
                name="preferredResolution"
                rows="2"
                value={formData.preferredResolution}
                onChange={(e) => setFormData({ ...formData, preferredResolution: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md text-teal-600"
              ></textarea>
            </div>

            <button type="submit" className="w-full p-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
              Submit Grievance
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}
