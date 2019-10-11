module.exports = {
    title: ' ',
    description: ' ',
    themeConfig: {
        logo: '/assets/images/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Introductions', link: '/Introductions/CT Unplugged/'},
            {text: 'Explorations', link: '/Explorations/Explorations/'},
            {text: 'Forms', link: '/Forms/'},
        ],
        sidebar: {
            '/Introductions/': [
                'CT Unplugged',
                'CT Intro',
                'Scratch',
                'Microbit',
                'AI Intro',
                'AI Ethics',
            ],
            '/Explorations/': [
                'Explorations',
                'AI 1',
                'AI 2',
                'AI 3',
                'Scratch 1',
                'Scratch 2',
                'Scratch 3',
                'Artbit 1',
                'Microbit 2',
                'Microbit 3'
            ],
            '/Forms/': [
                '',
            ]
          }
    }
}