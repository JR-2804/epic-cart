const PrimaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => (
  <button
    type="button"
    className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
    onClick={onClick}
  >
    {text}
  </button>
);

export default PrimaryButton;
