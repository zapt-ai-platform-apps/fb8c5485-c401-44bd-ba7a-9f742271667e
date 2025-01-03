import { Component } from 'solid-js';

const InputForm = (props) => {
  const {
    ingredients,
    setIngredients,
    dietaryPreference,
    setDietaryPreference,
    loading,
    handleGenerateRecipe,
  } = props;

  return (
    <div class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Available Ingredients:
        </label>
        <textarea
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none box-border"
          rows="4"
          placeholder="e.g., chicken, tomatoes, basil"
          value={ingredients()}
          onInput={(e) => setIngredients(e.target.value)}
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Dietary Preference:
        </label>
        <select
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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