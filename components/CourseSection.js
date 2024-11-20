const CourseSection = () => {
    const courses = [
      { title: "B.Sc. Biotechnology", description: "Explore fundamental biotech concepts." },
      { title: "M.Sc. Bioinformatics", description: "Dive into computational biology." },
      { title: "Ph.D. Biotechnology", description: "Conduct groundbreaking research." },
    ];
  
    return (
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white shadow-md rounded p-4">
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="mt-2">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CourseSection;
  