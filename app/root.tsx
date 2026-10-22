import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Route } from "./+types/root";
import "./css/style.css";
import "./css/index.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          {children}
          <ScrollRestoration />
          <Scripts />
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404 ? "Page not found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container">
      {/* <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h3 className="text-5xl">404 Page Not found</h3>
        <h3 className="text-4xl font-bold flex  text-primary">
          YOU ARE LOOKING FOR AMAZING GADGET RIGHT?? CLICK HERE <FaArrowDown />
        </h3>
        <Link
          className="bg-secondary px-12 py-4 rounded-2xl text-white font-bold"
          to="/products"
        >
          Browse All Gadget
        </Link>
      </div> */}
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 my-2 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
