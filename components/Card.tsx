import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => {
  return (
    <div className="p-4">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
        {/* Image */}
        {imgSrc && (
          <Link href={href || '#'} aria-label={`Link to ${title}`}>
            <div className="w-full overflow-hidden">
              <Image
                alt={title}
                src={imgSrc}
                width={544}
                height={306}
                className="h-[180px] w-full object-cover transition-transform duration-500 hover:scale-110 sm:h-[200px] md:h-[220px]"
              />
            </div>
          </Link>
        )}

        {/* Content */}
        <div className="flex flex-grow flex-col p-5">
          {/* Title */}
          <h2 className="mb-2 text-lg leading-snug font-semibold text-white sm:text-xl">
            {href ? (
              <Link
                href={href}
                aria-label={`Link to ${title}`}
                className="transition-colors duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>

          {/* Description */}
          <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
