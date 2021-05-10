import React from "react";
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { S } from './styles';
import { EnvironmentButtonProps } from './interface';

const EnvironmentButton = ({
  children,
  active = false,
  ...rest
}: EnvironmentButtonProps) => {

  return (
    <RectButton
      style={[
        S.container,
        active && S.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        S.text,
        active && S.textActive
      ]}>
        {children}
      </Text>
    </RectButton>
  )
};

export { EnvironmentButton };