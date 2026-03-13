import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'w-full bg-transparent'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50 backdrop-blur-md'
  }

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6">
        {/* LOGO + NAME */}
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <div className="mr-3">
              <Logo />
            </div>

            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden text-xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        {/* NAVIGATION */}
        <div className="flex items-center space-x-6">
          <div className="hidden items-center space-x-6 sm:flex">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 transition hover:text-cyan-400"
                >
                  {link.title}
                </Link>
              ))}
          </div>

          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
