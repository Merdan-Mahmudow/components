import { useEffect } from 'react';
import { useColorMode } from '../ui/color-mode';
import { StatusBar, Style } from '@capacitor/status-bar';

export const StatusBarSync = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    console.log(colorMode)
    const applyStatusBarStyle = async () => {
      // Тёмная тема: делаем статус-бар светлым (белый фон, тёмные иконки)
      if (colorMode === 'dark') {
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: '#ffffff' });
      } else {
        // Светлая тема: делаем статус-бар тёмным (тёмный фон, светлые иконки)
        await StatusBar.setStyle({ style: Style.Light });
        await StatusBar.setBackgroundColor({ color: '#1A202C' });
      }

      await StatusBar.setOverlaysWebView({ overlay: false });
    };

    applyStatusBarStyle();
  }, [colorMode]);

  return null; 
};