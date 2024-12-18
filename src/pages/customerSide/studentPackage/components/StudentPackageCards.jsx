import React from 'react';
import CourseCard from './CourseCard';

// Sample course data
const courses = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
    university: 'University of Sussex',
    location: 'United Kingdom',
    qualification: 'Course qualification',
    duration: '5 Years',
    price: '25,000',
    date: '20 Day',
    },

    {
        id: 1,
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
        university: 'University of Sussex',
        location: 'United Kingdom',
        qualification: 'Course qualification',
        duration: '5 Years',
        price: '25,000',
        date: '20 Day',
    },
    
    {
        id: 1,
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
        university: 'University of Sussex',
        location: 'United Kingdom',
        qualification: 'Course qualification',
        duration: '5 Years',
        price: '25,000',
        date: '20 Day',
    },
    

    {
        id: 1,
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
        university: 'University of Sussex',
        location: 'United Kingdom',
        qualification: 'Course qualification',
        duration: '5 Years',
        price: '25,000',
        date: '20 Day',
    },
    

    {
        id: 1,
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
        university: 'University of Sussex',
        location: 'United Kingdom',
        qualification: 'Course qualification',
        duration: '5 Years',
        price: '25,000',
        date: '20 Day',
    },

    {
        id: 1,
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
        university: 'University of Sussex',
        location: 'United Kingdom',
        qualification: 'Course qualification',
        duration: '5 Years',
        price: '25,000',
        date: '20 Day',
        },
    
        {
            id: 1,
            image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
            university: 'University of Sussex',
            location: 'United Kingdom',
            qualification: 'Course qualification',
            duration: '5 Years',
            price: '25,000',
            date: '20 Day',
        },
        
        {
            id: 1,
            image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
            university: 'University of Sussex',
            location: 'United Kingdom',
            qualification: 'Course qualification',
            duration: '5 Years',
            price: '25,000',
            date: '20 Day',
        },
        
    
        {
            id: 1,
            image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
            university: 'University of Sussex',
            location: 'United Kingdom',
            qualification: 'Course qualification',
            duration: '5 Years',
            price: '25,000',
            date: '20 Day',
        },
        
    
        {
            id: 1,
            image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734436943/Bideshgami/Public/i8gjy6mdjit1dzncgwhp.png', // Replace with your image URL
            university: 'University of Sussex',
            location: 'United Kingdom',
            qualification: 'Course qualification',
            duration: '5 Years',
            price: '25,000',
            date: '20 Day',
        },
    

    
    
  // Repeat data or use dynamic fetching
];

const StudentPackageCards = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold text-primary mb-6">Popular Courses</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            university={course.university}
            location={course.location}
            qualification={course.qualification}
            duration={course.duration}
            price={course.price}
            date={course.date}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentPackageCards;
