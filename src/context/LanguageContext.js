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
            text11: 'Read More'
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
            text11: 'بیشتر بخوانید'

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