import React from 'react'
import { social_media } from "../../utils/constans";

export default function SocialMedia() {
  return (
    <div className="social-media">
      {social_media.map(({ id, href, icon }) => (
        <a href={href} className="social-icon" key={id}>
          <i className={icon} />
        </a>
      ))}
    </div>
  )
}
