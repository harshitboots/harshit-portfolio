import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const Footer = () => {
  return (
    <footer className="mt-02">
      {/* GLOWING DIVIDER */}

      <div className="mb-12 flex w-full justify-center">
        <div className="h-[2px] w-[100%] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 blur-[0.5px]"></div>
      </div>

      <div className="flex flex-col items-center space-y-6 pb-12">
        {/* SOCIAL ICONS */}

        <div className="flex space-x-10 text-3xl text-pink-600 transition duration-200 hover:text-pink-300">
          {siteMetadata.github && <SocialIcon kind="github" href={siteMetadata.github} size={10} />}

          {siteMetadata.linkedin && (
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={10} />
          )}

          {siteMetadata.medium && <SocialIcon kind="medium" href={siteMetadata.medium} size={10} />}

          {siteMetadata.youtube && (
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={10} />
          )}
        </div>

        {/* COPYRIGHT */}

        <p className="text-lg font-medium text-white">
          © {new Date().getFullYear()} Harshit Tripathi
        </p>

        {/* TAGLINE */}

        <p className="max-w-xl text-center text-lg text-gray-300">
          Building modern data platforms and lakehouse architectures
        </p>
      </div>
    </footer>
  )
}

export default Footer
