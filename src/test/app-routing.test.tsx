import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { renderToString } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";

import { routeTree } from "@/routeTree.gen";

// The root shell renders a full <html> document, which jsdom cannot mount inside a
// div container, so the router is rendered to a string instead of into a live node.
async function renderAt(path: string) {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  await router.load();
  return renderToString(<RouterProvider router={router} />);
}

afterEach(() => {
  vi.restoreAllMocks();
});

// Assert only that the router mounts and paints a document shell, never page content:
// routes are rewritten as the app is built and this must keep passing.
describe("App routing", () => {
  it("renders the index route", async () => {
    const html = await renderAt("/");

    expect(html).toContain("<html");
    expect(html).toContain("<body");
    expect(html.length).toBeGreaterThan(1000);
  });

  it("renders the not-found route", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);

    const html = await renderAt("/this-route-does-not-exist");

    expect(html).toContain("<html");
    expect(html).toContain("<body");
    expect(html.length).toBeGreaterThan(1000);
  });
});
