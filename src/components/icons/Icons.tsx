interface IconProps {
  className?: string
}

export function LogoIcon({ className }: IconProps) {
  return (
    <svg className={className} width="32" height="28" viewBox="0 0 33 28" fill="none" aria-hidden="true">
      <path
        d="M31.871 0H1.129A1.129 1.129 0 0 0 0 1.129v25.742A1.129 1.129 0 0 0 1.129 28H31.87A1.129 1.129 0 0 0 33 26.871V1.129A1.129 1.129 0 0 0 31.871 0ZM7.714 20.129V7.875l13.842 6.127-13.842 6.127Z"
        fill="#FC4747"
      />
    </svg>
  )
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 0h4.992c.818 0 1.494.18 2.016.52.522.341.861.825 1.017 1.449.156.625.233 1.363.233 2.213v11.666c0 .65-.116 1.141-.347 1.475-.23.334-.553.5-.968.5-.415 0-.74-.166-.972-.5-.23-.334-.347-.825-.347-1.475V6.666h1.035c.233 0 .424-.062.572-.185a.63.63 0 0 0 .222-.5V4.37a.63.63 0 0 0-.222-.5.778.778 0 0 0-.572-.185H2.75V18.52c0 .65-.116 1.141-.347 1.475-.23.334-.553.5-.968.5-.415 0-.74-.166-.972-.5-.23-.334-.347-.825-.347-1.475V4.183c0-.85.077-1.588.233-2.213.156-.624.495-1.108 1.017-1.449C1.256.18 1.932 0 2.75 0Zm14.585 0c.818 0 1.494.18 2.016.52.522.341.861.825 1.017 1.449.156.625.233 1.363.233 2.213v11.666c0 .65-.116 1.141-.347 1.475-.23.334-.553.5-.968.5-.415 0-.74-.166-.972-.5-.23-.334-.347-.825-.347-1.475V6.666h1.035c.233 0 .424-.062.572-.185a.63.63 0 0 0 .222-.5V4.37a.63.63 0 0 0-.222-.5.778.778 0 0 0-.572-.185h-2.75V18.52c0 .65-.116 1.141-.347 1.475-.23.334-.553.5-.968.5-.415 0-.74-.166-.972-.5-.23-.334-.347-.825-.347-1.475V4.183c0-.85.077-1.588.233-2.213.156-.624.495-1.108 1.017-1.449.522-.34 1.198-.52 2.016-.52Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MoviesIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.25 0H3.75A3.75 3.75 0 0 0 0 3.75v12.5A3.75 3.75 0 0 0 3.75 20h12.5A3.75 3.75 0 0 0 20 16.25V3.75A3.75 3.75 0 0 0 16.25 0ZM4.502 13.07a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm3.75-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm1.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm1.25-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm2.5 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm1.25-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-2.5-3.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-1.25-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-2.5 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-1.25-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-2.5 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-1.25-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function TvIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 4.75A1.25 1.25 0 0 1 10 3.5h4.167a1.25 1.25 0 1 1 0 2.5H10A1.25 1.25 0 0 1 8.75 4.75ZM2.5 5.833A2.5 2.5 0 0 1 5 3.333h10a2.5 2.5 0 0 1 2.5 2.5v10.834a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5V5.833Zm2.5-.833a.833.833 0 0 0-.833.833v10.834c0 .46.373.833.833.833h10a.833.833 0 0 0 .833-.833V5.833A.833.833 0 0 0 15 5h-10Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BookmarkNavIcon({ className }: IconProps) {
  return (
    <svg className={className} width="17" height="20" viewBox="0 0 17 20" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 0a1.5 1.5 0 0 0-1.5 1.5v17.44a1.5 1.5 0 0 0 2.227 1.32L8.5 16.347l6.273 3.913A1.5 1.5 0 0 0 17 18.94V1.5A1.5 1.5 0 0 0 15.5 0h-14Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.714 3.571a7.143 7.143 0 1 0 4.508 12.74l4.285 4.286a1.786 1.786 0 0 0 2.523-2.523l-4.285-4.286A7.143 7.143 0 0 0 10.714 3.57Zm-3.572 7.143a3.571 3.571 0 1 1 7.142 0 3.571 3.571 0 0 1-7.142 0Z"
        fill="#fff"
      />
    </svg>
  )
}

export function BookmarkCardIcon({ className, filled }: IconProps & { filled?: boolean }) {
  return (
    <svg className={className} width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.467C0 0.656.656 0 1.467 0h9.066C11.344 0 12 .656 12 1.467v12.2a.733.733 0 0 1-1.089.644L6 11.523l-4.911 3.06A.733.733 0 0 1 0 13.667V1.467Z"
        fill={filled ? '#fff' : 'none'}
        stroke="#fff"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function CategoryTvIcon({ className }: IconProps) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        opacity="0.75"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 2.85A.75.75 0 0 1 6 2.1h2.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM1.5 3.5A1.5 1.5 0 0 1 3 2h6a1.5 1.5 0 0 1 1.5 1.5v6.5A1.5 1.5 0 0 1 9 11.5H3A1.5 1.5 0 0 1 1.5 10V3.5Zm1.5-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5H3Z"
        fill="#fff"
      />
    </svg>
  )
}

export function CategoryMovieIcon({ className }: IconProps) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        opacity="0.75"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 0H2.25A2.25 2.25 0 0 0 0 2.25v7.5A2.25 2.25 0 0 0 2.25 12h7.5A2.25 2.25 0 0 0 12 9.75v-7.5A2.25 2.25 0 0 0 9.75 0ZM2.701 7.842a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-1.5-2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-1.5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-1.5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        fill="#fff"
      />
    </svg>
  )
}
