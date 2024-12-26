const AdvancedOptions = (props) => {
  const {
    includeCookingTime,
    setIncludeCookingTime,
    includeNutritionalInfo,
    setIncludeNutritionalInfo,
    cuisineType,
    setCuisineType,
    difficultyLevel,
    setDifficultyLevel,
  } = props;

  return (
    <div class="mb-4">
      <div class="mb-2">
        <label class="flex items-center">
          <input
            type="checkbox"
            class="mr-2 cursor-pointer"
            checked={includeCookingTime()}
            onChange={(e) => setIncludeCookingTime(e.target.checked)}
          />
          <span class="text-gray-700">Include Cooking Time</span>
        </label>
      </div>
      <div class="mb-2">
        <label class="flex items-center">
          <input
            type="checkbox"
            class="mr-2 cursor-pointer"
            checked={includeNutritionalInfo()}
            onChange={(e) => setIncludeNutritionalInfo(e.target.checked)}
          />
          <span class="text-gray-700">Include Nutritional Information</span>
        </label>
      </div>
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
    </div>
  );
};

export default AdvancedOptions;