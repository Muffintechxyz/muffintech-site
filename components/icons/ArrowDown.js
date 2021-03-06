import React from 'react'

export const ArrowDown = ({ size = 28, color = '#000', className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.2553 15.0495L12.2553 15.0495L18.0419 9.46037L18.0421 9.46019C18.186 9.32066 18.1859 9.09232 18.0421 8.95278L18.0418 8.95253C17.9032 8.81865 17.6706 8.81785 17.5319 8.95271C17.5318 8.95281 17.5317 8.95292 17.5316 8.95302L11.9999 14.2952L6.46877 8.95256L6.46877 8.95256L6.46829 8.95209C6.4 8.88672 6.30856 8.85 6.2133 8.85C6.11805 8.85 6.02661 8.88672 5.95832 8.95209L5.95831 8.95209L5.95743 8.95295C5.81407 9.09247 5.81414 9.32065 5.95794 9.46014L5.95817 9.46037L11.7443 15.0491L11.7449 15.0496C11.884 15.1825 12.1155 15.1844 12.2553 15.0495Z'
        fill={color}
        stroke={color}
        strokeWidth='0.3'
      />
    </svg>
  )
}

export default ArrowDown
