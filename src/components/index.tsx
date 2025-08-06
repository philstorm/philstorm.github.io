// src/components/index.tsx
// —————————————————————————————————————————————————————————————————————————————
// re-export all your components from one place:

export { default as Navigation     } from "./Navigation";
export { default as Footer         } from "./Footer";
export { default as Main           } from "./Main";
export { default as Expertise      } from "./Expertise";
export { default as Timeline       } from "./Timeline";
export { default as Project        } from "./Project";
export { default as GitHubProjects } from "./GitHubProjects";
export { default as Contact        } from "./Contact";
export { default as FadeIn         } from "./FadeIn";

// THIS LINE is critical — it forces TS to treat this file as a module
// even if all you’ve done above is re-exports.
export {};
