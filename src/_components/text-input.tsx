import { TextInput as TextInputBase, TextInputProps } from 'react-native';

import { style } from './text-input.style';

type Props = TextInputProps;

export const TextInput = (props: Props) => {
  const {
    nativeID,
    style: textInputStyle,
    'aria-labelledby': labelledby,
    ...textInputProps
  } = props;

  return (
    <TextInputBase
      nativeID={nativeID}
      style={[style.input, textInputStyle]}
      aria-labelledby={labelledby ?? nativeID}
      {...textInputProps}
    />
  );
};
