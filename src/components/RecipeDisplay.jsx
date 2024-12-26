import { Show, createSignal } from 'solid-js';
import RecipeContent from './RecipeContent';
import RecipeActions from './RecipeActions';

const RecipeDisplay = (props) => {
  const { generatedRecipe } = props;
  const [copySuccess, setCopySuccess] = createSignal('');
  const [shareError, setShareError] = createSignal('');

  return (
    <Show when={generatedRecipe()}>
      <div class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 class="text-2xl font-bold text-green-600 mb-4">Your Custom Recipe</h2>
        <div class="prose">
          <RecipeContent generatedRecipe={generatedRecipe} />
        </div>
        <RecipeActions
          generatedRecipe={generatedRecipe}
          setCopySuccess={setCopySuccess}
          setShareError={setShareError}
        />
        <Show when={copySuccess()}>
          <div class="mt-2 text-green-600">{copySuccess()}</div>
        </Show>
        <Show when={shareError()}>
          <div class="mt-2 text-red-600">{shareError()}</div>
        </Show>
      </div>
    </Show>
  );
};

export default RecipeDisplay;