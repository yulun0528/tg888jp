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
//first
fetch('https://json.extendsclass.com/bin/f15bfa1e071d')
.then(response => response.json())
.then(data => {
    console.log(data);
    translations=data
})
.catch(error => {
    //second
    fetch('https://raw.githubusercontent.com/yulun0528/tg888jp/master/translations.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            translations=data
    }).catch(error => {
        console.error('Error fetching JSON:', error);
      });
});



function translatePage() {

 
    const allDiv = document.querySelectorAll('p, div, span, h6, h5, button');
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

const queryString = 
'[ng-init="total.AllBetAmount=total.AllBetAmount+list.gold"],'+
'[ng-init="totalLast.AllBetAmountLast=totalLast.AllBetAmountLast+list.gold"],'+
'[ng-init="total.AllEffectiveBet=total.AllEffectiveBet+list.effective_gold"],'+
'[ng-init="totalLast.AllEffectiveBetLast=totalLast.AllEffectiveBetLast+list.effective_gold"],'+
'[ng-init="total.AllResult=total.AllResult+list.win+list.water"],'+
'[ng-init="totalLast.AllResultLast=totalLast.AllResultLast+list.win+list.water"],'+
'[ng-bind="total.AllBetAmount"],'+
'[ng-bind="total.AllEffectiveBet"],'+
'[ng-bind="total.AllResult |number:2"],'+
'[ng-bind="::totalLast.AllBetAmountLast"],'+
'[ng-bind="::totalLast.AllEffectiveBetLast"],'+
'[ng-bind="::totalLast.AllResultLast |number:2"],'+
'.count_box p';



const price= document.querySelectorAll(queryString);
if (price) {
    price.forEach((p)=>{
        const taiwaneseDollarAmount = parseFloat(p.textContent); 

        const exchangeRate = 0.3; 

        const japaneseYenAmount = taiwaneseDollarAmount * exchangeRate;
      
        const formattedAmount = `${taiwaneseDollarAmount} (¥${japaneseYenAmount})`;
      
        p.textContent = formattedAmount;
    })
}

const maxcredit = document.querySelector('.acc_box span[ng-bind="memberData.maxcredit"]');
if(maxcredit){
    const taiwaneseDollarAmount = parseFloat(maxcredit.textContent); 

    const exchangeRate = 0.3; 

    const japaneseYenAmount = taiwaneseDollarAmount * exchangeRate;
  
    const formattedAmount = `<br>${taiwaneseDollarAmount} (¥${japaneseYenAmount})`;
  
    maxcredit.innerHTML = formattedAmount;
}

}





setInterval(translatePage, 100);
