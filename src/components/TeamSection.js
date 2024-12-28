import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Team Member',
      image: '/assets/domain/open_souce.jpg', // Replace with your image path
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    // Add more team members here
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-black  rounded-lg shadow-lg p-6 flex flex-col items-center border-4 border-nosk-green">
            <div className="relative text-nosk-green w-28 h-28 mb-4 rounded-full border-4 border-green-500 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
            <p className="text-sm mb-4">{member.role}</p>
            <div className="flex space-x-4">
              {member.socials.facebook && (
                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-blue-600" />
                </a>
              )}
              {member.socials.instagram && (
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="lg" className="text-pink-500" />
                </a>
              )}
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-blue-700" />
                </a>
              )}
              {member.socials.twitter && (
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="lg" className="text-blue-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}