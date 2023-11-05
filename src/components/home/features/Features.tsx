import FeaturesHero from "./FeaturesHero";
import FeaturesPics from "./FeaturesPics";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row common-padding py-10 items-center justify-between">
      <FeaturesHero />
      <FeaturesPics />
    </div>
  );
};

export default Features;
