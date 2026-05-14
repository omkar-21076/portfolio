import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/work/")({
  component: () => <Navigate to="/" hash="work" replace />,
});
