import React, {useState} from 'react';

export const LanguageContext = React.createContext();

const LanguageContextProvider = (props) => {
    const [language, setLanguage] = useState({
        isEnglish: false,
        english: {
            home: 'Home',
            leftSidebar: 'Left Sidebar',
            rightSidebar: 'Right Sidebar',
            noSidebar: 'no Sidebar',
            parallaxText1: 'Let’s build something that your users will love!',
            parallaxText2: 'We create mobile apps, games and websites for your own business.',
            text1: 'Experience and skills you need.',
            text2: ' We’ve produced top quality applications with hundreds of clients for more than 15 years. From one person startups to Fortune 500 enterprises, universities, and non-profits. This is our purpose, and here’s what we can do for you.',
            text3: 'Game & Gamification!',
            text4: 'Whether you need to make a tiny game to make your users more engaged, or you want a bigger game, we are at your side.',
            text5: 'Read More',
            text6: 'Mobile Applications',
            text7: 'Donec ornare neque ac sem. Mauris aliquet. Aliquam sem leo, vulputate sed, convallis at, ultricies quis, justo. Donec magna.',
            text8: 'Read More',
            text9: 'Game & Gamification!',
            text10: 'Donec ornare neque ac sem. Mauris aliquet. Aliquam sem leo, vulputate sed, convallis at, ultricies quis, justo. Donec magna.',
            text11: 'Read More',
            text_2_0: 'Out Latest Projects',
            text_2_1: 'Cafe Game - Multiplayer Games',
            text_2_2: 'CafeGame is an online multiplayer game platform which gives gamers abilities like social interactions,\n' +
                'leagues and chatrooms in addition to variaty of games that is growing both in size and features.Cafe Game - Multiplayer Games',
            text_2_3: 'Rosha - Flourishing Talents',
            text_2_4: 'In Rosha, we have helped in designing their homepage, showing the events they run, management panel for\n' +
                ' agency registrations, and their online store. And, it was a good experience for both of us!',
            text_2_5: 'Mauris vulputate dolor',
            text_2_6: 'In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra\n' +
            'vulputate enim. Aliquam erat volutpat. Donec leo, vivamus fermentum nibh in augue praesent a lacus\n' +
            'at urna congue rutrum.',
            text_2_7: 'Mauris vulputate dolor',
            text_2_8: 'In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra\n' +
                'vulputate enim. Aliquam erat volutpat. Donec leo, vivamus fermentum nibh in augue praesent a lacus\n' +
                'at urna congue rutrum.',
            text_3_1: 'We’d love to work with you',
            text_3_2: 'We’ve worked on a variety of projects with a wide range of clients, each with a unique problem set and\n' +
                ' perspective. We continually improve our process and do our best work in strong partnerships with our clients.',
            text_4_1: 'Get in touch',
            text_4_2: 'Integer sit amet pede vel arcu aliquet pretium',

        },
        farsi: {
            home: 'خانه',
            leftSidebar: 'منو چپ',
            rightSidebar: 'منو راست',
            noSidebar: 'بدون منو',
            parallaxText1: 'بیایید چیزی بسازیم که کاربران شما دوست دارن',
            parallaxText2: 'ما App های موبایل، بازی و وبسایت برای شما می سازیم',
            text1: 'تجربه و توانایی های مورد نیاز شما',
            text2: 'ما نرم افزارهای با کیفیتی برای چندین مشتری و برای بیش از 15 سال ساخته ایم' +
                ' از شرکت های استارت آپ تا بزرگترین شرکت ها، دانشگاه ها و انجمن های خیریه.' +
                ' این حرفه ماست، ما این کارها رو میتونیم براتون انجام بدهیم:',
            text3: 'بازی و بازی سازی!',
            text4: 'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی .',
            text5: 'بیشتر بخوانید',
            text6: 'نرم افزارهای موبایل',
            text7: 'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی .',
            text8: 'بیشتر بخوانید',
            text9: 'وبسایت و وب اپ',
            text10: 'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی .',
            text11: 'بیشتر بخوانید',
            text_2_0: 'آخرین پروژه های ما',
            text_2_1: 'کافه گیم - بازی های گروهی',
            text_2_2: 'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی,\n' +
                'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی',
            text_2_3: 'روشا - فارسی فارسی فارسی',
            text_2_4: 'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی\n' +
                ' فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی',
            text_2_5: 'فارسی فارسی فارسی فارسی',
            text_2_6: 'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی\n' +
                'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی',
            text_2_7: 'فارسی فارسی فارسی فارسی',
            text_2_8: 'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی\n' +
                'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی',
            text_3_1: 'ما علاقمند به همکاری با شما هستیم!',
            text_3_2: 'فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی فارسی\n' +
                'فارسی فارسی فارسی فارسی فارسی فارسی  ',
            text_4_1: 'با ما تماس بگیرید',
            text_4_2: 'فارسی فارسی فارسی فارسی فارسی',

        }
    });

    const toggleLanguage = () => {
        setLanguage({...language, isEnglish: !language.isEnglish })
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export default LanguageContextProvider;