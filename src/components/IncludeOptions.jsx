const IncludeOptions = (props) => {
  const { includeCookingTime, setIncludeCookingTime, includeNutritionalInfo, setIncludeNutritionalInfo } = props;

  return (
    <>
      <div class="mb-2">
        <label class="flex items-center">
          <input
            type="checkbox"
            class="mr-2 cursor-pointer"
            checked={includeCookingTime()}
            onChange={(e) => setIncludeCookingTime(e.target.checked)}
          />
          <span class="text-gray-700">Include Cooking Time</span>
        </label>
      </div>
      <div class="mb-2">
        <label class="flex items-center">
          <input
            type="checkbox"
            class="mr-2 cursor-pointer"
            checked={includeNutritionalInfo()}
            onChange={(e) => setIncludeNutritionalInfo(e.target.checked)}
          />
          <span class="text-gray-700">Include Nutritional Information</span>
        </label>
      </div>
    </>
  );
};

export default IncludeOptions;