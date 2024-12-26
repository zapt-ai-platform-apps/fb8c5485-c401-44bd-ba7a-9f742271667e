import useRecipeGenerator from '../hooks/useRecipeGenerator';
import InputForm from './InputForm';
import RecipeDisplay from './RecipeDisplay';
import LanguageSelector from './LanguageSelector';

function RecipeGenerator() {
  const {
    ingredients,
    setIngredients,
    dietaryPreference,
    setDietaryPreference,
    loading,
    generatedRecipe,
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
  } = useRecipeGenerator();

  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <LanguageSelector language={language} setLanguage={setLanguage} />
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
        unitPreference={unitPreference}
        setUnitPreference={setUnitPreference}
        language={language}
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