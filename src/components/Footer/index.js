import {Linkedin, GitHub, Mail, File, Code, Instagram} from 'react-feather'

import ActiveLink from '../ActiveLink'

import {footer, icons, icon, linkedin, github, mail, instagram, file, code} from './styles.module.css'

const localPart = 'robinnaghshbandi12'
const defaultPart = '@gmail.com'

const Gradient = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 132" width="0" height="0">
    <defs>
      <linearGradient id="instagram" gradientTransform="rotate(45)">
        <stop offset="0" stopColor="#fd5" />
        <stop offset=".1" stopColor="#fd5" />
        <stop offset=".5" stopColor="#ff543e" />
        <stop offset="1" stopColor="#c837ab" />
      </linearGradient>
    </defs>
  </svg>
)

const Footer = () => (
  <footer className={footer}>
    <p className={icons}>
      <a href="//www.linkedin.com/in/robin-naghshbandi/" className={linkedin} aria-label="linkedin">
        <Linkedin className={icon} />
      </a>
      <a href="//github.com/robbandi" className={github} aria-label="github">
        <GitHub className={icon} />
      </a>
      <a href="mailto:click.to.reveal@gmail.com" onClick={e => (window.location.href = `mailto:${localPart}${defaultPart}`, e.preventDefault())} className={mail} aria-label="email">
        <Mail className={icon} />
      </a>
      <a href="resume.pdf" className={file} aria-label="file">
        <File className={icon} />
      </a>
      <a href="//instagram.com/robbandi" className={instagram} aria-label="instagram">
          <Gradient/>
        <Instagram className={icon} />
      </a>
    </p>

    <a href="//github.com/robbandi/" className={code} aria-label="source code">
      <Code className={icon} />
    </a>
      </footer>
)

export default Footer
