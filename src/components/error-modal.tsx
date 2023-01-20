import CloseIcon from "./icons/close-icon";
import ErrorIcon from "./icons/error-icon";

const ErrorModal = ({ onAccept }: { onAccept: () => void }) => (
  <>
    <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-md" />
    <div className="fixed top-1/2 left-1/2 z-50 w-fit -translate-x-1/2 -translate-y-1/2">
      <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
        <button
          type="button"
          className="absolute top-2.5 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={onAccept}
        >
          <CloseIcon />
          <span className="sr-only">Close modal</span>
        </button>
        <ErrorIcon />
        <p className="mb-4 text-gray-500 dark:text-gray-300">
          Error occurred submitting the order
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white py-2 px-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
            onClick={onAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </>
);

export default ErrorModal;
