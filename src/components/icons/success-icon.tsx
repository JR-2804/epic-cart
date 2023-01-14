const SuccessIcon = () => (
  <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 p-2 dark:bg-green-900">
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">Success</span>
  </div>
);

export default SuccessIcon;
