import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-between md:flex-row mt-10 mb-4">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
        </div>
        <Link href="/">
          <div className="flex mb-3 space-x-2 text-sm text-gray-500 dark:text-gray-400">
            {siteMetadata.author}
          </div>
        </Link>
      </div>
    </footer>
  )
}
