import { Show } from 'solid-js';
import AdvancedOptions from './AdvancedOptions';
import IngredientsInput from './IngredientsInput.jsx';

const InputForm = (props) => {
  const {
    ingredients,
    setIngredients,
    dietaryPreference,
    setDietaryPreference,
    loading,
    handleGenerateRecipe,
    showAdvancedOptions,
    setShowAdvancedOptions,
    includeCookingTime,
    setIncludeCookingTime,
    includeNutritionalInfo,
    setIncludeNutritionalInfo,
    cuisineType,
    setCuisineType,
    difficultyLevel,
    setDifficultyLevel,
    unitPreference,
    setUnitPreference,
    language,
  } = props;

  return (
    <div class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <IngredientsInput
        ingredients={ingredients}
        setIngredients={setIngredients}
        language={language}
      />
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Dietary Preference:
        </label>
        <select
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
          value={dietaryPreference()}
          onChange={(e) => setDietaryPreference(e.target.value)}
        >
          <option>None</option>
          <option>Vegan</option>
          <option>Vegetarian</option>
          <option>Keto</option>
          <option>Gluten-Free</option>
        </select>
      </div>
      <div class="mb-4 flex items-center">
        <input
          type="checkbox"
          id="advancedOptionsToggle"
          class="mr-2 cursor-pointer"
          checked={showAdvancedOptions()}
          onChange={(e) => setShowAdvancedOptions(e.target.checked)}
        />
        <label for="advancedOptionsToggle" class="text-gray-700 text-sm font-bold cursor-pointer">
          Advanced Options
        </label>
      </div>
      <Show when={showAdvancedOptions()}>
        <AdvancedOptions
          includeCookingTime={includeCookingTime}
          setIncludeCookingTime={setIncludeCookingTime}
          includeNutritionalInfo={includeNutritionalInfo}
          setIncludeNutritionalInfo={setIncludeNutritionalInfo}
          cuisineType={cuisineType}
          setCuisineType={setCuisineType}
          difficultyLevel={difficultyLevel}
          setDifficultyLevel={setDifficultyLevel}
          unitPreference={unitPreference}
          setUnitPreference={setUnitPreference}
        />
      </Show>
      <button
        class={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
          loading() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleGenerateRecipe}
        disabled={loading()}
      >
        {loading() ? 'Generating Recipe...' : 'Generate Recipe'}
      </button>
    </div>
  );
};

export default InputForm;