import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, text1, text2, text3 } = frontMatter
  let mailurl = `mailto:${email}`
  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
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
            <RoughNotation type="highlight" show={true} color="#ff0000" aimationDelay={1200}>
              <Link href={mailurl} className="dark:text-gray-50 font-bold no-underline">
                {email}
              </Link>
            </RoughNotation>
            &nbsp; or contact me on social media.
          </p>
        </div>
      </div>
    </>
  )
}
