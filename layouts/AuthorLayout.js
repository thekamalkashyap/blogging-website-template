import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    github,
    text1,
    text2,
    text3,
  } = frontMatter
  let mailUrl = `mailto:${email}`
  let twitterUrl = `https://www.twitter.com/${twitter}`
  let githubUrl = `https://www.github.com/${github}`
  return (
    <>
      <PageSEO title={`About - ${name}`} description={`about the owner of the site - ${name}`} />
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 space-x-2">
          <Image
            src={avatar}
            alt="avatar"
            width="192px"
            height="192px"
            className="w-48 h-48 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl text-gray-500 font-bold leading-8 tracking-tight">
            {name}
          </h3>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="text-gray-500 dark:text-gray-400">{company}</div>
        </div>
        {/* <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div> */}
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          <p>{text1}</p>
          <br />
          <p>
            <RoughNotation type="bracket" brackets={['left', 'right']} show={true} color="#FF0000">
              {text2}
            </RoughNotation>
          </p>
          <br />
          <p>{text3}</p>
          <br />
          <p>
            Feel free to reach out if you have anything to talk about, you can mail me on &nbsp;
            <Link
              href={mailUrl}
              className="dark:text-yellow-300 text-blue-700 font-bold no-underline"
            >
              {email}
            </Link>
            &nbsp; or contact me on &nbsp;
            <Link
              href={twitterUrl}
              className="dark:text-yellow-300 text-blue-700 font-bold no-underline"
            >
              twitter
            </Link>
            . You can watch my projects and open source contributions &nbsp;
            <Link
              href={githubUrl}
              className="dark:text-yellow-300 text-blue-700 font-bold no-underline"
            >
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}
