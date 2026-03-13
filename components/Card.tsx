import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="max-w-[544px] p-4 md:w-1/2">
    <div
      className={`
        ${imgSrc && 'h-full'}
        overflow-hidden
        rounded-xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:border-cyan-400/40
        hover:shadow-lg
      `}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-300 hover:scale-105"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-300 hover:scale-105"
            width={544}
            height={306}
          />
        ))}

      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-white">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        <p className="mb-4 text-gray-400 leading-relaxed">
          {description}
        </p>

        {href && (
          <Link
            href={href}
            className="text-cyan-400 hover:text-cyan-300 text-base font-medium"
            aria-label={`Link to ${title}`}
          >
            Learn more →
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card