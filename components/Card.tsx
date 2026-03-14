import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 lg:w-1/3">
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-lg">
      {/* Image */}
      {imgSrc && (
        <Link href={href || '#'} aria-label={`Link to ${title}`}>
          <div className="w-full overflow-hidden">
            <Image
              alt={title}
              src={imgSrc}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              width={544}
              height={306}
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-white">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  </div>
)

export default Card
