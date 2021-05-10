import { RectButtonProperties } from 'react-native-gesture-handler';

interface PlantCardSecondaryProps extends RectButtonProperties {
  data: {
    name: string;
    photo: string;
    hour?: string;
  };
  handleRemove: () => void;
};

export { PlantCardSecondaryProps };