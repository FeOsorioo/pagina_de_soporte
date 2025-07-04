const Header = ({text1, text2, text3, color}) => {
    return (
        <div className="relative w-full h-[300px] flex items-start pt-14 justify-center text-white rounded "
            style={{ backgroundColor: `#${color ? color : "004466"}` }}>
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1600 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,150 C400,200 1300,50 1600,120 L1600,400 L0,200 Z"
              fill="#ffffff"
            />
          </svg>
        
          {/* Texto dentro del header */}
          <h1 className="relative z-10 md:text-5xl text-3xl sm:text-2xl font-extrabold text-center px-3">
            {text1} <span className="bg-white px-4 rounded-full" style={{ color: `#${color ? color : "004466"}` }}>{text2}</span> {text3}
          </h1>
        </div>
    )
}

export default Header;