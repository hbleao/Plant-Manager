import { RectButtonProps } from 'react-native-gesture-handler';

interface EnvironmentButtonProps extends RectButtonProps {
  children: string;
  active?: boolean;
};

export { EnvironmentButtonProps };