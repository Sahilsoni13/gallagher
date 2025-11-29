import { useTheme } from '@/contexts/theme-context';
import { Pressable, Text, View } from 'react-native';

export function ThemeToggle() {
  const { themePreference, setThemePreference } = useTheme();

  const options: Array<{ value: 'light' | 'dark' | 'system'; label: string }> =
    [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
      { value: 'system', label: 'System' },
    ];

  return (
    <View className="flex-row gap-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      {options.map(option => (
        <Pressable
          key={option.value}
          onPress={() => setThemePreference(option.value)}
          className={`px-4 py-2 rounded-md ${
            themePreference === option.value
              ? 'bg-blue-500 dark:bg-blue-600'
              : 'bg-transparent'
          }`}
        >
          <Text
            className={`font-medium ${
              themePreference === option.value
                ? 'text-white'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {option.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
