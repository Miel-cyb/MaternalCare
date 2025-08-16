
import type { ReactNode, HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  icon: ReactNode | string,
  desc: string,
  title: string
}

const Card: React.FC <CardProps> = ({icon, desc, className, title, ...rest}) => {
  return (
    <div {...rest} className={` ${className ?? ""}`}>
      <p>{icon}</p>
      {title && <p className="text-md text-center font-semibold">{title}</p> }
      <p>{desc}</p>
    </div>
  )
}

export default Card
