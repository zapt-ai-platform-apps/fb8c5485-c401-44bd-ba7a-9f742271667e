import { SolidMarkdown } from 'solid-markdown';

const RecipeContent = (props) => {
  const { generatedRecipe } = props;

  return <SolidMarkdown children={generatedRecipe()} />;
};

export default RecipeContent;