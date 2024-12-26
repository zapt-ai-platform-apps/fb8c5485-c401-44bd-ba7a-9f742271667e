function LanguageSelector(props) {
  const { language, setLanguage } = props;

  return (
    <div class="absolute top-4 right-4">
      <label for="languageSelector" class="mr-2 text-gray-700">Language:</label>
      <select
        id="languageSelector"
        value={language()}
        onChange={(e) => setLanguage(e.target.value)}
        class="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
      >
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
}

export default LanguageSelector;