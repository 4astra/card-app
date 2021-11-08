# Note
- App is built with Expo. If you want just only use for react-native please run `expo eject`

# helo-aspire

- Structure app is based on TypeScript, RxJS, Redux, Epic like below.
- App can be supported by multiple languages
- Support test use Jest but still not completed....
- App supports auto Light & Dark mode if not customzie background color
```
src
├── components
│   ├── AspireLogo.tsx
│   ├── CardInformation.tsx
│   ├── ConfigurationItem.tsx
│   ├── CurrencySymbol.tsx
│   ├── EditScreenInfo.tsx
│   ├── NotFoundScreen.tsx
│   ├── SocialButtons.tsx
│   ├── SpendingLimitComp.tsx
│   ├── StyledText.tsx
│   ├── Themed.tsx
│   ├── TouchableBack.tsx
│   ├── TouchableMoneyLimit.tsx
│   ├── TouchableShowHideCard.tsx
├── constants
│   ├── Colors.ts
│   └── Layout.ts
├── features
│   ├── card
│   ├── localization
│   ├── scan
│   └── tabs
├── hooks
│   ├── useCachedResources.ts
│   ├── useColorScheme.ts
│   └── useColorScheme.web.ts
├── models
│   ├── CardHolder.spec.ts
│   ├── CardHolder.ts
│   ├── CardState.ts
│   ├── Configuration.ts
│   ├── ErrorMessage.ts
│   ├── MoneyLimit.ts
│   └── SpendingLimit.ts
├── navigation
│   ├── BottomTabNavigator.tsx
│   ├── LinkingConfiguration.ts
│   ├── RootNavigation.tsx
│   └── index.tsx
├── network
│   ├── index.ts
│   └── x-fetch.ts
├── sevices
│   ├── card-api-client.ts
│   ├── index.ts
│   ├── logger-service.ts
│   └── types.d.ts
├── store
│   ├── index.ts
│   ├── root-action.ts
│   ├── root-epic.ts
│   ├── root-reducer.ts
│   └── types.d.ts
├── types.tsx
└── utils
    └── fmtNumber.ts

```

# screenshot

<img src="https://github.com/brianha289/card-app/blob/main/screen_shot/1.png" width="480" height="1120">
<img src="https://github.com/brianha289/card-app/blob/main/screen_shot/2.png" width="480" height="1120">
<img src="https://github.com/brianha289/card-app/blob/main/screen_shot/3.png" width="480" height="1120">
<img src="https://github.com/brianha289/card-app/blob/main/screen_shot/4.png" width="480" height="1120">
