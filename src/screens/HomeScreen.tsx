import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
} from '@ui-kitten/components';
import React from 'react';
import AgeScreen from './AgeScreen.tsx';
import { LabelScreen } from './LabelScreen.tsx';
import { NameScreen } from './NameScreen.tsx';

export const HomeScreen = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return <AgeScreen />
      case 1:
        return <LabelScreen />
      case 2:
        return <NameScreen />
      default:
        return null
    }
  }

  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={{ flex: 1 }}>
        {renderContent()}
      </Layout>
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
      >
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="Profile" />
        <BottomNavigationTab title="Age" />
      </BottomNavigation>
    </Layout>
  )
}