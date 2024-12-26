import { createSignal } from 'solid-js';
import { createEvent } from './supabaseClient';
import InputForm from './components/InputForm';
import RecipeDisplay from './components/RecipeDisplay';

function App() {
  const [ingredients, setIngredients] = createSignal('');
  const [dietaryPreference, setDietaryPreference] = createSignal('None');
  const [loading, setLoading] = createSignal(false);
  const [generatedRecipe, setGeneratedRecipe] = createSignal('');

  const handleGenerateRecipe = async () => {
    if (!ingredients()) return;

    setLoading(true);
    setGeneratedRecipe('');

    const prompt = `Create a detailed recipe using the following ingredients: ${ingredients()}. The recipe should be suitable for a ${dietaryPreference().toLowerCase()} diet. Please provide the recipe in markdown format.`;

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

export default App;