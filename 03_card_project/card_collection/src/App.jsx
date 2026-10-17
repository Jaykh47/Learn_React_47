import react from 'react';
import Card from './components/card';
const App = () => {

  const profiles = [
    {
      name: "Aarav Sharma",
      role: "UI/UX Designer",
      followers: 12500,
      images: 48,
      image: "https://i.pravatar.cc/300?img=12"
    },
    {
      name: "Priya Singh",
      role: "Frontend Developer",
      followers: 8900,
      images: 36,
      image: "https://i.pravatar.cc/300?img=47"
    },
    {
      name: "Rohan Das",
      role: "Photographer",
      followers: 24100,
      images: 120,
      image: "https://i.pravatar.cc/300?img=11"
    },
    {
      name: "Ananya Roy",
      role: "Digital Creator",
      followers: 18700,
      images: 76,
      image: "https://i.pravatar.cc/300?img=44"
    },
    {
      name: "Kabir Mehta",
      role: "Full Stack Developer",
      followers: 6300,
      images: 29,
      image: "https://i.pravatar.cc/300?img=13"
    },
    {
      name: "Sneha Patel",
      role: "Content Creator",
      followers: 31200,
      images: 94,
      image: "https://i.pravatar.cc/300?img=49"
    },
    {
      name: "Arjun Sen",
      role: "Graphic Designer",
      followers: 10400,
      images: 52,
      image: "https://i.pravatar.cc/300?img=14"
    },
    {
      name: "Ishita Bose",
      role: "Fashion Blogger",
      followers: 42800,
      images: 143,
      image: "https://i.pravatar.cc/300?img=45"
    },
    {
      name: "Vikram Gupta",
      role: "Software Engineer",
      followers: 7600,
      images: 33,
      image: "https://i.pravatar.cc/300?img=15"
    }
  ];

  return <div className='parent'>
    {profiles.map((detail) => {
      return <Card name={detail.name} role={detail.role} followers={detail.followers} images={detail.images} link={detail.image}/>;
    })}
  </div>
}
export default App;