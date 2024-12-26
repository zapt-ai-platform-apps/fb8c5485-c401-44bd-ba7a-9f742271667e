import { saveAs } from 'file-saver';
import { Packer, Document, Paragraph } from 'docx';

const RecipeActions = (props) => {
  const { generatedRecipe, setCopySuccess, setShareError } = props;

  const handleCopyRecipe = async () => {
    try {
      await navigator.clipboard.writeText(generatedRecipe());
      setCopySuccess('Recipe copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShareRecipe = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Custom Recipe',
          text: generatedRecipe(),
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShareError('Share not supported on this browser/device.');
      setTimeout(() => setShareError(''), 3000);
    }
  };

  const handleExportWord = async () => {
    const doc = new Document({
      sections: [
        {
          children: [new Paragraph(generatedRecipe())],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'Recipe.docx');
  };

  return (
    <div class="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <div class="flex space-x-4">
        <button
          onClick={handleCopyRecipe}
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Copy Recipe
        </button>
        <button
          onClick={handleShareRecipe}
          class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Share Recipe
        </button>
        <button
          onClick={handleExportWord}
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Export as Word
        </button>
      </div>
    </div>
  );
};

export default RecipeActions;