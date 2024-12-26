import { createSignal } from 'solid-js';
import { createEvent } from '../supabaseClient';
import InputForm from './InputForm';
import RecipeDisplay from './RecipeDisplay';

function RecipeGenerator() {
  const [ingredients, setIngredients] = createSignal('');
  const [dietaryPreference, setDietaryPreference] = createSignal('None');
  const [loading, setLoading] = createSignal(false);
  const [generatedRecipe, setGeneratedRecipe] = createSignal('');

  // Advanced options
  const [showAdvancedOptions, setShowAdvancedOptions] = createSignal(false);
  const [includeCookingTime, setIncludeCookingTime] = createSignal(false);
  const [includeNutritionalInfo, setIncludeNutritionalInfo] = createSignal(false);
  const [cuisineType, setCuisineType] = createSignal('Any');
  const [difficultyLevel, setDifficultyLevel] = createSignal('Any');

  const handleGenerateRecipe = async () => {
    if (!ingredients()) return;

    setLoading(true);
    setGeneratedRecipe('');

    let prompt = `Create a detailed recipe using the following ingredients: ${ingredients()}. The recipe should be suitable for a ${dietaryPreference().toLowerCase()} diet.`;

    if (showAdvancedOptions()) {
      if (includeCookingTime()) {
        prompt += ' Include estimated cooking time.';
      }
      if (includeNutritionalInfo()) {
        prompt += ' Include nutritional information.';
      }
      if (cuisineType() !== 'Any') {
        prompt += ` The recipe should be in ${cuisineType()} cuisine.`;
      }
      if (difficultyLevel() !== 'Any') {
        prompt += ` The difficulty level should be ${difficultyLevel().toLowerCase()}.`;
      }
    }

    prompt += ' Please provide the recipe in markdown format.';

    console.log('Sending prompt to AI:', prompt);

    try {
      const result = await createEvent('chatgpt_request', {
        prompt: prompt,
        response_type: 'text',
      });

      console.log('Received result from AI:', result);

      setGeneratedRecipe(result);
    } catch (error) {
      console.error('Error generating recipe:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <h1 class="text-4xl font-bold text-green-600 mb-8">Custom Recipe Generator</h1>
      <InputForm
        ingredients={ingredients}
        setIngredients={setIngredients}
        dietaryPreference={dietaryPreference}
        setDietaryPreference={setDietaryPreference}
        loading={loading}
        handleGenerateRecipe={handleGenerateRecipe}
        showAdvancedOptions={showAdvancedOptions}
        setShowAdvancedOptions={setShowAdvancedOptions}
        includeCookingTime={includeCookingTime}
        setIncludeCookingTime={setIncludeCookingTime}
        includeNutritionalInfo={includeNutritionalInfo}
        setIncludeNutritionalInfo={setIncludeNutritionalInfo}
        cuisineType={cuisineType}
        setCuisineType={setCuisineType}
        difficultyLevel={difficultyLevel}
        setDifficultyLevel={setDifficultyLevel}
      />
      <RecipeDisplay generatedRecipe={generatedRecipe} />
      <div class="mt-8 text-gray-500">
        Made on{' '}
        <a
          href="https://www.zapt.ai"
          class="text-green-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZAPT
        </a>
      </div>
    </div>
  );
}

export default RecipeGenerator;