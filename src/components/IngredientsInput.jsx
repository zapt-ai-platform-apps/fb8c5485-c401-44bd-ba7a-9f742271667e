import { Show, onMount, createSignal, createEffect } from 'solid-js';

const IngredientsInput = (props) => {
  const { ingredients, setIngredients, language } = props;

  const [isListening, setIsListening] = createSignal(false);
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] = createSignal(false);
  let recognition;

  onMount(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = languageToCode(language());
      setIsSpeechRecognitionSupported(true);

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const updatedIngredients = ingredients()
          ? ingredients() + ', ' + transcript
          : transcript;
        setIngredients(updatedIngredients);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    } else {
      console.error('Speech Recognition not supported in this browser.');
      setIsSpeechRecognitionSupported(false);
    }
  });

  createEffect(() => {
    if (recognition) {
      recognition.lang = languageToCode(language());
    }
  });

  const handleSpeechInput = () => {
    if (isListening()) {
      recognition.stop();
    } else {
      recognition.lang = languageToCode(language());
      recognition.start();
    }
  };

  const languageToCode = (lang) => {
    switch (lang) {
      case 'English':
        return 'en-US';
      case 'Spanish':
        return 'es-ES';
      case 'French':
        return 'fr-FR';
      // Add more languages as needed
      default:
        return 'en-US';
    }
  };

  return (
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
      <div class="flex items-center mt-2">
        <Show when={isSpeechRecognitionSupported()}>
          <button
            type="button"
            class={`p-2 bg-red-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 ${
              isListening() ? 'bg-red-700' : ''
            }`}
            onClick={handleSpeechInput}
          >
            {isListening() ? 'Stop Listening' : 'Speak Ingredients'}
          </button>
        </Show>
        <Show when={!isSpeechRecognitionSupported()}>
          <p class="text-red-600">Speech recognition not supported in this browser.</p>
        </Show>
      </div>
    </div>
  );
};

export default IngredientsInput;