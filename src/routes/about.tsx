import type { Route } from "./+types/about";

const SITE_URL = "https://www.andrewtheguy.com";
const TITLE = "About this site — Andrew Chen";
const DESCRIPTION =
  "How this site is built: React Router, Vite, TypeScript, and a hand-rolled vanilla-CSS design system.";

export const meta: Route.MetaFunction = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: `${SITE_URL}/about` },
  { name: "twitter:title", content: TITLE },
  { name: "twitter:description", content: DESCRIPTION },
  { tagName: "link", rel: "canonical", href: `${SITE_URL}/about` },
];

export default function About() {
  return (
    <div className="page">
      <section className="page-section">
        <h1>About this site</h1>
        <p>
          This site is built with{" "}
          <a href="https://reactrouter.com/" rel="external noreferrer" target="_blank">
            React Router
          </a>{" "}
          and{" "}
          <a href="https://vite.dev/" rel="external noreferrer" target="_blank">
            Vite
          </a>
          , written in{" "}
          <a href="https://www.typescriptlang.org/" rel="external noreferrer" target="_blank">
            TypeScript
          </a>{" "}
          with a hand-rolled vanilla-CSS design system. It is statically prerendered and
          deployed as plain static files — no jQuery and no CSS framework, just a small,
          fast, modern front end.
        </p>
      </section>

      <section className="page-section">
        <h1>Contact</h1>
        <ul className="contact-list">
          <li>
            Email:{" "}
            <a href="mailto:hello@andrewtheguy.com">hello@andrewtheguy.com</a>.
          </li>
        </ul>
      </section>
    </div>
  );
}
