import { ButtonProps, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { token } from './tokens';

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
}

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: token.color.primary,
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
