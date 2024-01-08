export default function Menu({ toggleMenu }) {
  return (
    <div className="flex justify-center mt-20">
      <button
        onClick={toggleMenu}
        className="px-8 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 dark:border-blue-200 dark:hover:bg-blue-400 dark:active:bg-blue-600"
      >
        Start Game
      </button>
    </div>
  );
}
