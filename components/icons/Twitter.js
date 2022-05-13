import React from 'react'

export const Twitter = ({ size = 28, color = '#000' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M25.8554 7.14155C24.9647 7.53553 24.0201 7.79427 23.053 7.90922C24.0724 7.29956 24.8354 6.34007 25.1997 5.20955C24.243 5.77888 23.1942 6.17788 22.101 6.39372C21.3667 5.60806 20.3934 5.08701 19.3325 4.91157C18.2715 4.73612 17.1823 4.91612 16.2342 5.42358C15.2861 5.93103 14.5321 6.73751 14.0897 7.71764C13.6472 8.69777 13.5409 9.79663 13.7874 10.8434C11.8473 10.7461 9.94942 10.242 8.21686 9.36366C6.48431 8.48532 4.95584 7.25244 3.7307 5.74505C3.29703 6.48991 3.06914 7.33665 3.07036 8.19855C3.07036 9.89022 3.93136 11.3847 5.24036 12.2597C4.46571 12.2353 3.7081 12.0261 3.0307 11.6495V11.7102C3.03093 12.8369 3.42079 13.9288 4.13418 14.8008C4.84758 15.6728 5.84059 16.2713 6.94486 16.4947C6.22575 16.6896 5.47172 16.7183 4.73986 16.5787C5.05121 17.5485 5.65804 18.3966 6.47539 19.0043C7.29273 19.6121 8.27968 19.949 9.29803 19.9679C8.28592 20.7628 7.12707 21.3504 5.88772 21.6971C4.64838 22.0438 3.35284 22.1428 2.0752 21.9885C4.30551 23.4229 6.90181 24.1844 9.55353 24.1819C18.5287 24.1819 23.4369 16.7467 23.4369 10.2986C23.4369 10.0886 23.431 9.87622 23.4217 9.66855C24.377 8.97808 25.2016 8.12274 25.8565 7.14272L25.8554 7.14155Z'
        fill={color}
      />
    </svg>
  )
}

export default Twitter