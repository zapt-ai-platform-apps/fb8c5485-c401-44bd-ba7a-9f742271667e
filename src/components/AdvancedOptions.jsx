import IncludeOptions from './IncludeOptions';
import PreferenceSelects from './PreferenceSelects';

const AdvancedOptions = (props) => {
  const {
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
  } = props;

  return (
    <div class="mb-4">
      <IncludeOptions
        includeCookingTime={includeCookingTime}
        setIncludeCookingTime={setIncludeCookingTime}
        includeNutritionalInfo={includeNutritionalInfo}
        setIncludeNutritionalInfo={setIncludeNutritionalInfo}
      />
      <PreferenceSelects
        cuisineType={cuisineType}
        setCuisineType={setCuisineType}
        difficultyLevel={difficultyLevel}
        setDifficultyLevel={setDifficultyLevel}
        unitPreference={unitPreference}
        setUnitPreference={setUnitPreference}
      />
    </div>
  );
};

export default AdvancedOptions;