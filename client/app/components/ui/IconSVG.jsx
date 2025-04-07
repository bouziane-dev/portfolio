const IconSVG = ({
  pathData,
  text,
  viewBox,
  width = '60px',
  height = '60px'
}) => {
  return (
    <div className='group flex flex-col items-center justify-center gap-2 transition-transform duration-300 hover:scale-105'>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        preserveAspectRatio='xMidYMid meet'
        className='h-12 w-12 fill-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]'
      >
        <g>
          <path d={pathData} fill='white' stroke='none' />
        </g>
      </svg>
      <p className='mt-2 text-sm font-light text-white md:text-base'>{text}</p>
    </div>
  )
}

export default IconSVG
