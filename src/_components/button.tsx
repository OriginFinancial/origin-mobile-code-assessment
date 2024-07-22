import { ButtonProps, Text, TouchableOpacity } from 'react-native';

import { style } from './button.style';

type Props = Omit<ButtonProps, 'title' | 'color'> & {
  children: string;
};

export const Button = (props: Props) => {
  const { children } = props;

  return (
    <TouchableOpacity style={style.button} {...props}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
