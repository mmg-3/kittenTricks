import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  NavigationContainer as ReactNavigationContainer,
  HeaderProps,
  createBottomTabNavigator,
} from 'react-navigation';
import {
  MenuContainer,
  LayoutsContainer,
  ComponentsContainer,
  ThemesContainer,
} from '@src/containers/menu';
import {
  AuthContainer,
  SignInContainer,
  SignUpContainer,
  SocialContainer,
  ProfileSettings1Container,
  ProfileSettings2Container,
  ProfileSettings3Container,
  ArticlesContainer,
  ArticleList1Container,
  ArticleList2Container,
  ArticleList3Container,
  MessagingContainer,
  DashboardsContainer,
  WalkthroughContainer,
  EcommerceContainer,
  NavigationContainer,
} from '@src/containers/layouts';
import {
  AppBar,
  AppBarProps,
} from './appBar.component';
import { BackArrowIcon } from '@src/assets/icons';

const HeadingNavigationOptions = ({ navigation }) => {

  const header = (props: HeaderProps): React.ReactElement<AppBarProps> => {
    return (
      <AppBar
        {...props}
        navigation={navigation}
        backIcon={BackArrowIcon}
      />
    );
  };

  return { ...navigation, header };
};

const NavigationNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Navigation']: NavigationContainer,
  },
  {
    headerMode: 'none',
  },
);

const EcommerceNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Ecommerce']: EcommerceContainer,
  },
  {
    headerMode: 'none',
  },
);

const WalkthroughNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Walkthrough']: WalkthroughContainer,
  },
  {
    headerMode: 'none',
  },
);

const DashboardsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Dashboards']: DashboardsContainer,
  },
  {
    headerMode: 'none',
  },
);

const MessagingNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Messaging']: MessagingContainer,
  },
  {
    headerMode: 'none',
  },
);

const ArticlesNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Articles']: ArticlesContainer,
    ['Article List 1']: ArticleList1Container,
    ['Article List 2']: ArticleList2Container,
    ['Article List 3']: ArticleList3Container,
  },
  {
    headerMode: 'none',
  },
);

const SocialNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Social']: SocialContainer,
    ['Profile Settings 1']: ProfileSettings1Container,
    ['Profile Settings 2']: ProfileSettings2Container,
    ['Profile Settings 3']: ProfileSettings3Container,
  },
  {
    headerMode: 'none',
  },
);

const AuthNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Auth']: AuthContainer,
    ['Sign In']: SignInContainer,
    ['Sign Up']: SignUpContainer,
  },
  {
    headerMode: 'none',
  },
);

const ThemesNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Themes']: ThemesContainer,
  },
  {
    headerMode: 'none',
  },
);

const ComponentsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Components']: ComponentsContainer,
  },
  {
    headerMode: 'none',
  },
);

const LayoutsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Layouts']: LayoutsContainer,
    ['Auth']: AuthNavigator,
    ['Social']: SocialNavigator,
    ['Articles']: ArticlesNavigator,
    ['Messaging']: MessagingNavigator,
    ['Dashboards']: DashboardsNavigator,
    ['Walkthrough']: WalkthroughNavigator,
    ['Ecommerce']: EcommerceNavigator,
    ['Navigation']: NavigationNavigator,
  }, {
    headerMode: 'none',
  },
);

const HomeNavigator: ReactNavigationContainer = createBottomTabNavigator({
  ['Layouts']: LayoutsNavigator,
  ['Components']: ComponentsNavigator,
  ['Themes']: ThemesNavigator,
}, {
  tabBarComponent: MenuContainer,
});

export const Router: ReactNavigationContainer = createAppContainer(HomeNavigator);