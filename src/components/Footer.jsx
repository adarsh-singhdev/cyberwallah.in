import { Shield } from 'lucide-react'

const footerLinks = {
  Content: ['Latest Blog Posts', 'Security News', 'CTF Writeups', 'Bug Bounty Tips', 'Tools & Resources'],
  Community: ['Discord Server', 'Forum', 'Contribute', 'Newsletter', 'Events'],
  Company: ['About Us', 'Contact', 'Advertise', 'Privacy Policy', 'Terms of Use'],
}

function TwitterX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function LinkedIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 100-4 2 2 0 000 4z"/>
    </svg>
  )
}
function Discord() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
    </svg>
  )
}
function YouTube() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.83 48.89 48.89 0 00-8.64 0A4.82 4.82 0 013.41 6.69 49.15 49.15 0 002 12a49.15 49.15 0 001.41 5.31 4.82 4.82 0 003.77 2.83 48.89 48.89 0 008.64 0 4.83 4.83 0 003.77-2.83A49.15 49.15 0 0022 12a49.15 49.15 0 00-1.41-5.31zM10 15V9l5 3-5 3z"/>
    </svg>
  )
}

const socials = [
  { label: 'Twitter', icon: <TwitterX /> },
  { label: 'LinkedIn', icon: <LinkedIn /> },
  { label: 'Discord', icon: <Discord /> },
  { label: 'YouTube', icon: <YouTube /> },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white px-[5%] pt-14 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#" className="inline-flex items-center gap-2.5 no-underline mb-4">
            <div className="w-9 h-9 bg-accent rounded-lg grid place-items-center flex-shrink-0">
              <Shield size={18} color="white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-extrabold text-[1.1rem] text-white">
              CyberWallah
            </span>
          </a>
          <p className="text-[0.88rem] text-white/50 leading-relaxed font-light max-w-[260px]">
            India's go-to destination for cybersecurity knowledge — built by the community, for the community.
          </p>
          <div className="flex gap-2.5 mt-5">
            {socials.map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/15 bg-transparent grid place-items-center text-white/50 no-underline hover:border-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-display font-bold text-[0.9rem] text-white mb-4 tracking-tight">
              {heading}
            </h4>
            <ul className="list-none flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[0.88rem] text-white/50 font-light no-underline hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-7">
        <p className="text-[0.82rem] text-white/35 font-light">
          © 2026 CyberWallah. Made with ❤️ in India.
        </p>
        <div className="flex gap-5">
          {['Privacy', 'Terms', 'Sitemap'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[0.82rem] text-white/50 no-underline hover:text-white transition-colors font-light"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
