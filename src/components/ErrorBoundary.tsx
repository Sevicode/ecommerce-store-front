import React from "react";
import { useRouteError } from "react-router";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-red-600">An error occurred</h1>
      <p className="mt-4 text-gray-700">
        {error instanceof Error ? error.message : "Something went wrong!"}
      </p>
    </div>
  );
};

export default ErrorBoundary;
