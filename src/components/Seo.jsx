import { useEffect } from "react";

const SITE_NAME = "Nestivo";

// Sets document.title and the meta-description tag for the current page.
// No router-level head library needed for a site this size — plain DOM
// updates on mount/param change are enough.
export default function Seo({ title, description, raw = false }) {
  useEffect(() => {
    if (raw) {
      document.title = title || SITE_NAME;
    } else {
      document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
    }

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
