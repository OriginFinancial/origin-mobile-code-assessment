import { Text, View, type TextProps } from 'react-native';

import { style } from './labeled.style';

type LabeledProps = TextProps & {
  title: string;
};

export const Labeled = (props: LabeledProps) => {
  const { title, children, style: textStyle, ...textProps } = props;

  return (
    <View style={style.container}>
      <Text style={[style.label, textStyle]} {...textProps}>
        {title}
      </Text>
      {children}
    </View>
  );
};
