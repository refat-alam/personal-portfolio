import Link from "next/link"

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"


const socials = [
  {icon: <FaGithub/>, path: "https://github.com/refat-alam"},
  {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/m-refat-alam/"},
  {icon: <FaFacebook/>, path: "https://www.facebook.com/refat.yahoo"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" className={iconStyles} >
          {item.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Social