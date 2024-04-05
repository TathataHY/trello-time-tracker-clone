import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = "An unexpected error has occurred.";
  if (typeof error === "object" && error !== null) {
    errorMessage = error instanceof Error ? error.message : String(error);
  }

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen p-4 gap-12"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-l">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm">
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
