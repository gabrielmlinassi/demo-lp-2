import { FC } from 'react'

interface TextBlockComposition {
  Overline: React.FC
  Headline: React.FC
}

/**
 * Outputs sort of a highlighted text block with an overline and a headline
 */
const TextBlock: FC & TextBlockComposition = ({ children }) => {
  return <div className="relative z-20">{children}</div>
}

// FIXME: class .overline
const Overline: FC = ({ children }) => {
  return (
    <span className="text-lg font-bold text-[#F00B8F] md:text-2xl">
      {children}
    </span>
  )
}

const Headline: FC = ({ children }) => {
  return <h2 className="mt-4">{children}</h2>
}

TextBlock.Overline = Overline
TextBlock.Headline = Headline

export { TextBlock }
