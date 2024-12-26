import { createSignal } from 'solid-js';
import { createEvent } from '../supabaseClient';

function useRecipeGenerator() {
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
  const [unitPreference, setUnitPreference] = createSignal('Metric');

  // Language options
  const [language, setLanguage] = createSignal('English');

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
        prompt += ` The recipe should be a ${cuisineType()} dish.`;
      }
      if (difficultyLevel() !== 'Any') {
        prompt += ` The difficulty level should be ${difficultyLevel().toLowerCase()}.`;
      }
      if (unitPreference()) {
        prompt += ` Measurements should be in ${unitPreference().toLowerCase()} units.`;
      }
    }

    prompt += ` Please provide the recipe in markdown format. All text should be in ${language()}.`;

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

  return {
    ingredients,
    setIngredients,
    dietaryPreference,
    setDietaryPreference,
    loading,
    generatedRecipe,
    setGeneratedRecipe,
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
    setLanguage,
    handleGenerateRecipe,
  };
}

export default useRecipeGenerator;