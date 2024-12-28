import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Section from './Section';

export default function TeamSection() {
  const teamlead = [
    {
      name: 'Aman Sheikh',
      role: 'Team Member',
      image: '/assets/domain/open_souce.jpg', // Replace with your image path
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },

  ];

  const teamMembers = [
    {
      name: 'Sanjib Shah',
      role: 'Team Member',
      image: '/assets/domain/open_souce.jpg', // Replace with your image path
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
  
  ];

  return (
    <div className="py-10 px-4">
{/* Coordinator */}
      <div className="mt-4 max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {teamlead.map((member, index) => (
    <div
      key={index}
      className="bg-nosk-black rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center border-4 border-transparent transition-all hover:shadow-xl hover:border-nosk-green group">
      <div className="flex flex-row items-center space-x-4">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-green-500 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-base sm:text-lg font-semibold text-nosk-white mb-1">{member.name}</h3>
          <p className="text-xs sm:text-sm text-nosk-white mb-4">{member.role}</p>
          <div className="flex space-x-4">
            {Object.entries(member.socials).map(([platform, link], i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-nosk-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <FontAwesomeIcon
                  icon={
                    platform === 'facebook'
                      ? faFacebookF
                      : platform === 'instagram'
                      ? faInstagram
                      : platform === 'linkedin'
                      ? faLinkedinIn
                      : faTwitter
                  }
                  size="lg"
                  className={`${
                    platform === 'facebook'
                      ? 'text-blue-600'
                      : platform === 'instagram'
                      ? 'text-pink-500'
                      : platform === 'linkedin'
                      ? 'text-blue-700'
                      : 'text-blue-400'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
{/* Members */}
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-nosk-black rounded-lg shadow-lg p-6 flex flex-col items-center border-4 border-transparent transition-all hover:shadow-xl hover:border-nosk-green group">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 rounded-full border-4 border-green-500 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-nosk-white mb-1">{member.name}</h3>
            <p className="text-sm text-nosk-white mb-4">{member.role}</p>
            <div className="flex space-x-4">
              {Object.entries(member.socials).map(([platform, link], i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-nosk-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={
                      platform === 'facebook'
                        ? faFacebookF
                        : platform === 'instagram'
                        ? faInstagram
                        : platform === 'linkedin'
                        ? faLinkedinIn
                        : faTwitter
                    }
                    size="lg"
                    className={`${
                      platform === 'facebook'
                        ? 'text-blue-600'
                        : platform === 'instagram'
                        ? 'text-pink-500'
                        : platform === 'linkedin'
                        ? 'text-blue-700'
                        : 'text-blue-400'
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}