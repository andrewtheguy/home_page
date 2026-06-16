import { focusAreas, socialLinks } from "../data";
import type { Route } from "./+types/home";

const SITE_URL = "https://andrewtheguy.com";
const TITLE = "Andrew Chen — passionate coder, classical music lover, special food maker";
const DESCRIPTION =
  "The personal website of Andrew Chen — software developer, classical music listener, and home baker.";

export const meta: Route.MetaFunction = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: `${SITE_URL}/` },
  { name: "twitter:title", content: TITLE },
  { name: "twitter:description", content: DESCRIPTION },
  { tagName: "link", rel: "canonical", href: `${SITE_URL}/` },
];

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="hero-title">
          Hello, I am <strong>Andrew Chen</strong>!
        </h1>
        <p className="hero-tagline">
          Passionate coder, classical music lover, special food maker.
        </p>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="social-link"
              rel="external noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="projects">
        {focusAreas.map((area) => (
          <article key={area.title} className="card">
            <div className="card-icon">
              <img src={area.icon} alt={area.alt} />
            </div>
            <h2>{area.title}</h2>
            <p>{area.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
