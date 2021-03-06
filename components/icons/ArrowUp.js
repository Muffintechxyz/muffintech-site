import React from 'react'

export const ArrowUp = ({ size = 28, color = '#000', className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.7447 8.95048L11.7447 8.9505L5.95813 14.5396L5.95794 14.5398C5.81399 14.6793 5.81406 14.9077 5.95789 15.0472L5.95816 15.0475C6.09684 15.1814 6.32938 15.1822 6.46812 15.0473C6.46823 15.0472 6.46834 15.0471 6.46844 15.047L12.0001 9.70481L17.5312 15.0474L17.5312 15.0474L17.5317 15.0479C17.6 15.1133 17.6914 15.15 17.7867 15.15C17.8819 15.15 17.9734 15.1133 18.0417 15.0479L18.0417 15.0479L18.0426 15.0471C18.1859 14.9075 18.1859 14.6794 18.0421 14.5399L18.0418 14.5396L12.2557 8.95092L12.2551 8.95036C12.116 8.81747 11.8845 8.81557 11.7447 8.95048Z'
        fill={color}
        stroke={color}
        strokeWidth='0.3'
      />
    </svg>
  )
}

export default ArrowUp
