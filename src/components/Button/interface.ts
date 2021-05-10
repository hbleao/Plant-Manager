import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  type: 'small'| 'medium' | 'large',
  children: ReactNode;
};