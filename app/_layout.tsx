import { Colors } from '@/constants/theme';
import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from '@/contexts/theme-context';
import {
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';
import {
  SourceSans3_400Regular,
  SourceSans3_500Medium,
  SourceSans3_600SemiBold,
  SourceSans3_700Bold,
} from '@expo-google-fonts/source-sans-3';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { useCallback, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

function RootLayoutContent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const backgroundColor = Colors[resolvedTheme].background;

  // Load fonts
  const [fontsLoaded, fontError] = Font.useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
    SourceSans3_400Regular,
    SourceSans3_500Medium,
    SourceSans3_600SemiBold,
    SourceSans3_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      SystemUI.setBackgroundColorAsync(backgroundColor);
    }
  }, [backgroundColor]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{ flex: 1 }}
        className={isDark ? 'dark' : ''}
        onLayout={onLayoutRootView}
      >
        <PaperProvider>
          <SafeAreaProvider>
            <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="modal"
                  options={{ presentation: 'modal', title: 'Modal' }}
                />
              </Stack>
              <StatusBar style={isDark ? 'light' : 'dark'} />
            </NavigationThemeProvider>
          </SafeAreaProvider>
        </PaperProvider>
      </View>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  return (
    <CustomThemeProvider>
      <RootLayoutContent />
    </CustomThemeProvider>
  );
}
