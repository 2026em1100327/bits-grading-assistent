import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BITS Pilani Digital – Advanced Grading Console" },
      {
        name: "description",
        content:
          "Advanced grading console for the BITS Pilani Digital CodeForge challenge.",
      },
      { property: "og:title", content: "BITS Pilani Digital – Advanced Grading Console" },
      {
        property: "og:description",
        content:
          "Advanced grading console for the BITS Pilani Digital CodeForge challenge.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/grading-console.html"
      title="BITS Pilani Digital – Advanced Grading Console"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
