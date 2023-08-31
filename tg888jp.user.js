// ==UserScript==
// @name         tg888jp
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Description of your extension
// @author       Your Name
// @match        https://www.tg888.ws/*
// @match        https://tg888.ws/*
// @grant        none
// @license       GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==



let homePage = [
    ['.clear_wrap .back', 'PC版に戻る'],
    ['.clear_wrap .clear', '履歴をクリア'],
    ['.input_wrap li:nth-child(1) input', 'アカウント'],
    ['.input_wrap li:nth-child(2) input','パスワード'],
    ['.text1','アカウント' ],
    ['.text2','パスワード' ],
    ['.md-label span', 'パスワードを記憶する'],
]

let translations=[];
fetch('https://raw.githubusercontent.com/yulun0528/tg888jp/master/translations.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    translations=data
})
.catch(error => {
  console.error('Error fetching JSON:', error);
});



function translatePage() {

 
    const allDiv = document.querySelectorAll('p, div, span, h6');
    allDiv.forEach((ele) => {

        if(ele.textContent && ele.childElementCount === 0){
        const translation = translations.find(item => ele.textContent.includes(item.original)); 
        if (translation) {
            ele.textContent = ele.textContent.replace(translation.original, translation.translated);
        }
    }
});
            
    const mobileAccount = document.querySelector('input[placeholder="輸入帳號"]');
    if (mobileAccount) {
        mobileAccount.placeholder = 'アカウント';
    }

    const mobilePassword = document.querySelector('input[placeholder="輸入密碼"]');
    if (mobilePassword) {
        mobilePassword.placeholder = 'パスワード';
    }

    
    homePage.forEach((obj)=>{
        const div = document.querySelector(obj[0]);
        if(div && div.textContent){
            div.textContent = obj[1]
        }

    })

    const rmbme = document.querySelector('.password_wrap p');
    if(rmbme){
    for (let node of rmbme.childNodes) {
        if (node.textContent== ' 記住我') {
            node.textContent='私を覚えてる';
        }
    }
}
    
    const pwdwrap = document.querySelector('.btn_wrap button');
    if(pwdwrap){
    for (let node of pwdwrap.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent='右にスワイプ'
        }
    }
}


}



setInterval(translatePage, 100);

    
