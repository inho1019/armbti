function kakaosh() {
    if (rere === 6) {
        ganbu();
    } else {
        ellev();
    }
};

function ganbu() {
    Kakao.Share.sendCustom({ 
        templateId: 87946, 
        templateArgs: {                     
        THUMB: 'https://armbti.netlify.app/img/reimg-'+rere+'.png',
        NAME: '<' + reall[rere].name + '> 입니다',
    },
    });
    };

function ellev() {
        Kakao.Share.sendCustom({ 
        templateId: 87946, 
        templateArgs: {                     
        THUMB: 'https://armbti.netlify.app/img/reimg-'+rere+'.png',
        NAME: '<' + reall[rere].name + relev[rele].name + '> 입니다',
    },
    });
    }