import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function TeamSection() {
  const teamlead = [
    {
      name: 'Aman Sheikh',
      role: 'Team Lead',
      image: '/assets/domain/open_souce.jpg', // Replace with your image path
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      image: '/assets/domain/open_souce.jpg',
      socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' },
    },
  ];

  const sectionTwoMembers = [
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
  ];

  const sectionThreeMembers = [
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Jane Smith', role: 'Designer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Bob Green', role: 'Manager', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
    { name: 'Alice Brown', role: 'Developer', image: '/assets/domain/open_souce.jpg', socials: { facebook: '#', instagram: '#', linkedin: '#', twitter: '#' } },
  ];

  return (
    <div className="py-10 px-4">
     {/* Section 1: Lead */}
<div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
  {teamlead.map((member, index) => (
    <div
      key={index}
      className="bg-nosk-black rounded-lg shadow-lg p-6 flex items-center border-4 border-transparent hover:shadow-xl hover:border-nosk-green group transition-all">
      <div className="relative w-24 h-24 rounded-full border-4 border-green-500 overflow-hidden mr-12 transform group-hover:translate-y-[-5px] transition-transform duration-1000">
        <Image src={member.image} alt={member.name} fill className="object-cover rounded-full" />
      </div>
      <div className="flex flex-col text-center transform group-hover:translate-y-[-5px] transition-transform duration-1000">
        <h3 className="text-lg font-semibold text-nosk-white">{member.name}</h3>
        <p className="text-sm text-nosk-white">{member.role}</p>
        <div className="flex space-x-4 mt-4">
          {Object.entries(member.socials).map(([platform, link], i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nosk-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000">
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
  ))}
</div>

{/* Section 2 */}
<div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {sectionTwoMembers.map((member, index) => (
    <div
      key={index}
      className="bg-nosk-black rounded-lg shadow-lg p-6 flex items-center border-4 border-transparent hover:shadow-xl hover:border-nosk-green group transition-all">
      <div className="relative w-24 h-24 rounded-full border-4 border-green-500 overflow-hidden mr-12 transform group-hover:translate-y-[-5px] transition-transform duration-1000">
        <Image src={member.image} alt={member.name} fill className="object-cover rounded-full" />
      </div>
      <div className="flex flex-col text-center transform group-hover:translate-y-[-5px] transition-transform duration-1000">
        <h3 className="text-lg font-semibold text-nosk-white">{member.name}</h3>
        <p className="text-sm text-nosk-white">{member.role}</p>
        <div className="flex space-x-4 mt-4">
          {Object.entries(member.socials).map(([platform, link], i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nosk-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000">
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
  ))}
</div>

      {/* Section 3 */}
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sectionThreeMembers.slice(0, 10).map((member, index) => (
          <div
            key={index}
            className="bg-nosk-black rounded-lg shadow-lg p-6 flex flex-col items-center border-4 border-transparent hover:shadow-xl hover:border-nosk-green group transition-all">
            <div className="relative w-24 h-24 rounded-full border-4 border-green-500 overflow-hidden transform group-hover:translate-y-[-5px] transition-transform duration-1000">
              <Image src={member.image} alt={member.name} fill className="object-cover rounded-full" />
            </div>
            <div className="flex flex-col text-center transform group-hover:translate-y-[-5px] transition-transform duration-1000">
              <h3 className="text-lg font-semibold text-nosk-white mt-4">{member.name}</h3>
              <p className="text-sm text-nosk-white">{member.role}</p>
              <div className="flex space-x-4 mt-4">
                {Object.entries(member.socials).map(([platform, link], i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nosk-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000">
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
        ))}
      </div>
    </div>
  );
}