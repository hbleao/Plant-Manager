import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { style } from './styles';

import { ButtonProps } from './interface';

const Button = ({ children, type, ...rest}: ButtonProps) => {

  return (
    <TouchableOpacity
    style={style[type]}
    activeOpacity={0.7}
    {...rest}
  >
    <Text style={style.buttonText}>
      {children}
    </Text>
  </TouchableOpacity>
  )
};



export default Button;