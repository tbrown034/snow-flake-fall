export default function Menu({ toggleMenu }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={toggleMenu}
        className="p-2 px-8 border-2 rounded-lg border-blue-950 hover:bg-blue-400 active:bg-blue-600 dark:border-blue-100"
      >
        Start Game
      </button>
    </div>
  );
}
