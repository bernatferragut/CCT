module.exports = {
    title: ' ',
    description: ' ',
    themeConfig: {
        logo: '/assets/images/logo.png',
        nav: [
            {text: 'Home', link: '../'},
            {text: 'AM', link: '/AM/'},
            {text: 'PM', link: '/PM/'},
            {text: 'FORMS', link: '/FORMS/'},
        ],
        sidebar: {
            '/AM/': [
                '',
                'CT Unplugged',
                'CT Intro',
                'Scratch',
                'Microbit',
                'AI Intro',
                'AI Hands On',
                'AI Ethics',
            ],
            '/PM/': [
                '',
                'Explorations',
                'AI 1',
                'AI 2',
                'AI 3',
                'Scratch 1',
                'Scratch 2',
                'Scratch 3',
                'Microbit 1',
                'Microbit 2',
                'Microbit 3'
            ],
            '/FORMS/': [
                '',
            ]
          }
    }
}