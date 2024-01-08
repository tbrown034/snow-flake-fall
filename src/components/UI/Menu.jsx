export default function Menu({ toggleMenu }) {
  return (
    <div className="flex justify-center mt-20">
      <button
        onClick={toggleMenu}
        className="px-8 py-2 text-4xl font-bold text-white transition-colors duration-300 bg-teal-800 border-2 border-teal-800 rounded-lg hover:bg-teal-700 active:bg-teal-900 focus:outline-none focus:ring focus:ring-teal-300 dark:border-teal-200 dark:hover:bg-teal-600 dark:active:bg-teal-700"
      >
        Start Game
      </button>
    </div>
  );
}
