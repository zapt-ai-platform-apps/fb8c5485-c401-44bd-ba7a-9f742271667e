import { Show } from 'solid-js';
import { SolidMarkdown } from 'solid-markdown';

const RecipeDisplay = (props) => {
  const { generatedRecipe } = props;

  return (
    <Show when={generatedRecipe()}>
      <div class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 class="text-2xl font-bold text-green-600 mb-4">Your Custom Recipe</h2>
        <div class="prose">
          <SolidMarkdown children={generatedRecipe()} />
        </div>
      </div>
    </Show>
  );
};

export default RecipeDisplay;