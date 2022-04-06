import { FollowIcons } from './FollowIcons'

const Input = () => {
  return (
    <input
      type="email"
      placeholder="Enter address"
      className="w-full rounded py-4 px-4 text-lg placeholder:text-black placeholder:text-opacity-30 focus:outline-none"
    />
  )
}

export const Footer = () => {
  return (
    <>
      <div className="bg-[#F00B8F] px-6 pt-20 pb-10 text-center">
        <div className="inline-flex flex-col text-center">
          <span className="text-4xl font-bold text-[#FAFAFA] md:text-6xl">
            Join our newsletter
          </span>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Input />
            <button className="w-full rounded bg-black py-4 text-lg font-bold text-white md:max-w-[160px]">
              Sign me up!
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F00B8F] px-6 pb-4 text-center">
        <FollowIcons />
        <div className="mt-24">
          <span className="text-xs text-[#FAFAFA] md:text-sm">
            Copyright ©2022 - Round Hill Records
          </span>
        </div>
      </div>
    </>
  )
}
