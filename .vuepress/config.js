module.exports = {
    title: '学习笔记',
    description: '记录学习生涯的各种笔记！',
    base: '/note/',
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }]
    ],
    markdown: {
        lineNumbers: true
    },
    smoothScroll: true,
    theme: 'vuepress-theme-antdocs',
    port: 5000,
    plugins: {
        '@vuepress/medium-zoom': {
            selector: '.theme-antdocs-content :not(a) > img',
            options: {
                margin: 16
            }
        }
    },
    themeConfig: {
        logo: '/logo.png',
        smoothScroll: true,
        lastUpdated: 'Last Updated',


        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'vuejs/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如文档不是放在仓库的根目录下：
        docsDir: 'note',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'gh-pages',
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',


        displayAllHeaders: true,
        activeHeaderLinks: false,
        nav: [
            { text: 'Mysql', link: '/mysql/' },
            { text: 'Java', link: '/java/' },
            {
                text: 'Web',
                ariaLabel: 'Web',
                items: [
                    { text: 'HTML', link: '/web/html/' },
                    { text: 'CSS', link: '/web/css/' },
                    { text: 'JavaScript', link: '/web/javascript/' },
                    { text: 'EMScript', link: '/web/EMScript/' },
                ]
            },
            {
                text: '算法',
                ariaLabel: '算法',
                items: [
                    { text: '数据结构及算法', link: '/algo/' }
                ]
            }
        ],
        sidebar: {
            '/algo/': [{
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '',
                    'Complexity'
                ]
            }],
            '/web/': [

            ],
            '/java/': [

            ],
            '/mysql/': [

            ],
        }
        // sidebar: {
        //     '/algo/': [{

        //             collapsable: false,
        //             sidebarDepth: 0,
        //             children: [
        //                 '',
        //                 'Complexity'
        //             ]
        //         }
        //     ],
        //     "/mysql/": [
        //         ''
        //     ],
        //     "/zh/component/": [{
        //             title: '开发指南',
        //             collapsable: false,
        //             sidebarDepth: 0,
        //             children: [
        //                 '',
        //                 'Start'
        //             ]
        //         },
        //         {
        //             title: '基础组件', // 必要的
        //             collapsable: false, // 可选的, 默认值是 true,
        //             sidebarDepth: 0, // 可选的, 默认值是 1
        //             children: [
        //                 'Layout',
        //                 'Container',
        //                 'Button',
        //                 'Card',
        //             ]
        //         }
        //     ],
        // },
    },

}