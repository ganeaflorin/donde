import { useThemeColor } from '@/hooks/useThemeColor';
import { Text, type TextProps } from 'react-native';
import { styles } from './ThemedText.styles';
import { FontVariants } from './fontVariants';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  font?: FontVariants;
  textColor?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  font,
  textColor,
  ...rest
}: ThemedTextProps) {
  const color =
    textColor ?? useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const fontMappings = {
    [FontVariants.LIGHT]: styles.fontLight,
    [FontVariants.REGULAR]: styles.fontRegular,
    [FontVariants.MEDIUM]: styles.fontMedium,
    [FontVariants.SEMI_BOLD]: styles.fontSemiBold,
    [FontVariants.BOLD]: styles.fontBold,
  };

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        font ? fontMappings[font] : styles.fontRegular,
        style,
      ]}
      {...rest}
    />
  );
}
