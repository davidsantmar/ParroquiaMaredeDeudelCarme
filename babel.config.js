export const presets = ['babel-preset-expo'];
export const plugins = [
    [
        'module:react-native-dotenv',
        {
            envName: 'APP_ENV',
            moduleName: '@env',
            path: '.env',
        },
    ],
];