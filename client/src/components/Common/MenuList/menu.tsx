
export interface IMenu {
    path: string;
    icon: string;
    title: string;
    modifier: string;
    className?: string;
}

export const mainMenu = [
    {
        title: 'VideoChat',
        icon: 'fa-comments-o',
        modifier: 'videochat',
        path: '/'
    },
    {
        title: 'Ladies Gallery',
        icon: 'fa-ladies',
        modifier: 'gallery',
        path: '/gallery'
    },
    {
        title: 'VideoClips',
        icon: 'fa-video',
        modifier: 'videoclips',
        path: '/videoclips'
    },
    {
        title: 'Search',
        icon: 'fa-search',
        modifier: 'search',
        path: '/search'
    },
    {
        title: 'Romance Tours',
        icon: 'fa-map-marker',
        modifier: 'romance-tour',
        path: '/romance-tours'
    },
    {
        title: 'Blog',
        icon: 'fa-pencil-square',
        modifier: 'blog',
        path: '/blog'
    },
    {
        title: 'Useful information',
        icon: 'fa-info',
        modifier: 'useful-information',
        path: '/blog'
    },
    {
        title: 'Terms of Use',
        icon: '',
        modifier: 'terms-of-use',
        path: '/terms-of-use'
    },
    {
        title: 'FAQ',
        icon: 'fa-question-circle-o',
        modifier: 'faq',
        path: '/faq'
    },
    {
        title: 'Support',
        icon: 'fa-life-ring',
        modifier: 'support',
        path: '/Support'
    }
];