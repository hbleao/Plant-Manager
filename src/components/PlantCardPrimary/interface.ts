import { RectButtonProperties } from 'react-native-gesture-handler';

interface PlantProps extends RectButtonProperties {
  data: {
    name: string;
    photo: string;
  }
};

export { PlantProps };