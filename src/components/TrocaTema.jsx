import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Ajuste o caminho se necessário
 
const TrocaTema = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
 
  return (
<Button
      title={isDarkTheme ? 'Trocar para claro' : 'Trocar para ciano'}
      onPress={toggleTheme}
    />
  );
};
 
export default TrocaTema;