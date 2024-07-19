import { TextInput as TextInputBase, StyleSheet, TextInputProps } from 'react-native';

import { token } from './tokens';

type Props = TextInputProps;

export const TextInput = (props: Props) => {
  const {
    style: textInputStyle,
    'aria-labelledby': labelledby,
    ...textInputProps
  } = props;

  return (
    <TextInputBase
      style={[style.input, textInputStyle]}
      aria-labelledby={labelledby ?? props.nativeID}
      {...textInputProps}
    />
  );
}

const style = StyleSheet.create({
  input: {
    width: '100%',
    height: 46,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: token.color.backgroundMain,
    color: token.color.textNeutral,
    borderColor: token.color.secondary,
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 4,
  },
});
