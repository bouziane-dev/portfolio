const IconSVG = ({
  pathData,
  text,
  viewBox,
  width = '60px',
  height = '60px'
}) => {
  return (
    <div className='flex flex-col items-center'>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        preserveAspectRatio='xMidYMid meet'
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
