const ToggleSwitch = ({language, onToggle}) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onToggle}
      />
      <div className="relative w-11 h-6 bg-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-main   after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {language}
      </span>
    </label>
  );
};

export default ToggleSwitch;
