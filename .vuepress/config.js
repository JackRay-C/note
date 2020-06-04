var path = require('path')
var fs = require('fs')

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
    port: 5000,
    plugins: {
        '@vuepress/medium-zoom': {
            selector: ".theme-note-content img",
            options: {
                margin: 0,
                background: 'rgba(0,0,0,.4)'
            }
        }
    },
    theme: 'note',
    evergreen: true,
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
        nav: [{
                text: '算法',
                ariaLabel: '算法',
                items: [
                    { text: '数据结构及算法', link: '/algo/' }
                ]
            },
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
            { text: 'Git', link: '/git/' },
        ],
        sidebar: {
            '/algo/': getAlgoSidebar(),
            '/web/html/': [],
            '/web/css/': [],
            '/web/javascript/': [],
            '/web/vue/': [],
            '/web/emscript/': [],
            '/java/': getJavaSidebar(),
            '/mysql/': getMysqlSidebar(),
            "/git/": getGitSidebar()
        }
    },

}


function getAlgoSidebar() {
    return [{
            title: '数据结构和算法',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '',
                'Complexity'
            ]
        },
        {
            title: '机器学习算法',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '/algo/ai/'
            ]
        }
    ]
}


function getMysqlSidebar() {
    return [{
            title: 'MySQL基础篇',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '/mysql/',
                '/mysql/一条SQL更新语句是如何执行的',
                '/mysql/Mysql命令',
            ]
        },
        {
            title: 'MySQL实践篇',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '/mysql/practice/',
                '/mysql/practice/索引'
            ]
        }
    ]
}

function getJavaSidebar() {
    return [{
        title: 'Java基础',
        collapsable: false,
        sidebarDepth: 0,
        children: [
            ''
        ]
    }]
}

function getGitSidebar() {
    return [{
            title: 'Git基础篇',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '/git/basis/',
                '/git/basis/github'
            ]
        },
        {
            title: 'Git高级篇',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '/git/advanced/',
                '/git/advanced/advenced'
            ]
        },
    ]
}