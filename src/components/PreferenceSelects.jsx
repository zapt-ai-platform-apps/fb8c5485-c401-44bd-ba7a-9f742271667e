const PreferenceSelects = (props) => {
  const { cuisineType, setCuisineType, difficultyLevel, setDifficultyLevel, unitPreference, setUnitPreference } = props;

  return (
    <>
      <div class="mb-2">
        <label class="block text-gray-700 mb-1">Cuisine Type:</label>
        <select
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
          value={cuisineType()}
          onChange={(e) => setCuisineType(e.target.value)}
        >
          <option>Any</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Chinese</option>
          <option>Indian</option>
          <option>French</option>
          <option>Japanese</option>
        </select>
      </div>
      <div class="mb-2">
        <label class="block text-gray-700 mb-1">Difficulty Level:</label>
        <select
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
          value={difficultyLevel()}
          onChange={(e) => setDifficultyLevel(e.target.value)}
        >
          <option>Any</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div class="mb-2">
        <label class="block text-gray-700 mb-1">Units:</label>
        <select
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
          value={unitPreference()}
          onChange={(e) => setUnitPreference(e.target.value)}
        >
          <option>Metric</option>
          <option>Imperial</option>
        </select>
      </div>
    </>
  );
};

export default PreferenceSelects;