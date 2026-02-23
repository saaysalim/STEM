import Navigation from './components/Navigation';
import CourseCard from './components/CourseCard';

export default function App() {
  const courses = [
    {
      id: 1,
      title: 'Intro to Math',
      description: 'Learn basic math concepts'
    },
    {
      id: 2,
      title: 'Intro to Science',
      description: 'Introduction to science for kids'
    }
  ];

  return (
    <div className="min-h-screen bg-[#a8dadc]">
      <Navigation />
      <div className="py-8 px-6">
        <h1 className="text-4xl text-[#2196F3] text-center mb-8">Courses</h1>
        <div className="max-w-5xl mx-auto">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
