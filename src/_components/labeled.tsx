import { StyleSheet, Text, View, type TextProps } from 'react-native';

import { token } from './tokens';

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
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  label: {
    fontWeight: 'bold',
    color: token.color.textNeutral,
  },
});
