// Build-time only: scripts/prerender.mjs renders the blog routes to static HTML
// so crawlers that don't run JavaScript (GPTBot, ClaudeBot, PerplexityBot...)
// see each article's real text instead of the homepage fallback.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import Blog, { BLOG_META } from "./pages/Blog";
import BlogPost, { blogPosts, pageTitle } from "./pages/BlogPost";

export { blogPosts, BLOG_META, pageTitle };

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </StaticRouter>,
  );
}
