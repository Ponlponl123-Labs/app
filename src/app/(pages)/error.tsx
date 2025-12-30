"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] gap-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-default-500">We apologize for the inconvenience.</p>
      <button
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
