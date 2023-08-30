let homePage = [
    ['.clear_wrap .back', 'PC版に戻る'],
    ['.clear_wrap .clear', '履歴をクリア'],
    ['.input_wrap li:nth-child(1) input', 'アカウント'],
    ['.input_wrap li:nth-child(2) input','パスワード'],
    ['.text1','アカウント' ],
    ['.text2','パスワード' ],
    ['.md-label span', 'パスワードを記憶する'],
]



function translatePage() {

    const translations = [
        { original: 'NYY-洋基[主]', translated: 'NYYヤンキース[ホーム]' },
        { original: 'NYY-洋基', translated: 'NYYヤンキース' },
        { original: 'BOS-紅襪[主]', translated: 'BOSレッドソックス[ホーム]' },
        { original: 'BOS-紅襪', translated: 'BOSレッドソックス' },
        { original: 'TOR-藍鳥[主]', translated: 'TORブルージェイズ[ホーム]' },
        { original: 'TOR-藍鳥', translated: 'TORブルージェイズ' },
        { original: 'TB-光芒[主]', translated: 'TBレイズ[ホーム]' },
        { original: 'TB-光芒', translated: 'TBレイズ' },
        { original: 'BAL-金鶯[主]', translated: 'BALオリオールズ[ホーム]' },
        { original: 'BAL-金鶯', translated: 'BALオリオールズ' },
        { original: 'CLE-守護者[主]', translated: 'CLEガーディアンズ[ホーム]' },
        { original: 'CLE-守護者', translated: 'CLEガーディアンズ' },
        { original: 'CWS-白襪[主]', translated: 'CWSホワイトソックス[ホーム]' },
        { original: 'CWS-白襪', translated: 'CWSホワイトソックス' },
        { original: 'MIN-雙城[主]', translated: 'MINツインズ[ホーム]' },
        { original: 'MIN-雙城', translated: 'MINツインズ' },
        { original: 'DET-老虎[主]', translated: 'DETタイガース[ホーム]' },
        { original: 'DET-老虎', translated: 'DETタイガース' },
        { original: 'KC-皇家[主]', translated: 'KCロイヤルズ[ホーム]' },
        { original: 'KC-皇家', translated: 'KCロイヤルズ' },
        { original: 'HOU-太空人[主]', translated: 'HOUアストロズ[ホーム]' },
        { original: 'HOU-太空人', translated: 'HOUアストロズ' },
        { original: 'OAK-運動家[主]', translated: 'OAKアスレチックス[ホーム]' },
        { original: 'OAK-運動家', translated: 'OAKアスレチックス' },
        { original: 'LAA-天使[主]', translated: 'LAAエンゼルス[ホーム]' },
        { original: 'LAA-天使', translated: 'LAAエンゼルス' },
        { original: 'SEA-水手[主]', translated: 'SEAマリナーズ[ホーム]' },
        { original: 'SEA-水手', translated: 'SEAマリナーズ' },
        { original: 'TEX-遊騎兵[主]', translated: 'TEXレンジャーズ[ホーム]' },
        { original: 'TEX-遊騎兵', translated: 'TEXレンジャーズ' },
        { original: 'ARI-響尾蛇[主]', translated: 'ARIダイヤモンドバックス[ホーム]' },
        { original: 'ARI-響尾蛇', translated: 'ARIダイヤモンドバックス' },
        { original: 'ATL-勇士[主]', translated: 'ATLブレーブス[ホーム]' },
        { original: 'ATL-勇士', translated: 'ATLブレーブス' },
        { original: 'CHC-小熊[主]', translated: 'CHCカブス[ホーム]' },
        { original: 'CHC-小熊', translated: 'CHCカブス' },
        { original: 'CIN-紅人[主]', translated: 'CINレッズ[ホーム]' },
        { original: 'CIN-紅人', translated: 'CINレッズ' },
        { original: 'MIL-釀酒人[主]', translated: 'MILブルワーズ[ホ'},
        { original: 'MIL-釀酒人', translated: 'MILブルワーズ' },
        { original: 'PIT-海盜[主]', translated: 'PITパイレーツ[ホーム]' },
        { original: 'PIT-海盜', translated: 'PITパイレーツ' },
        { original: 'STL-紅雀[主]', translated: 'STLカージナルス[ホーム]' },
        { original: 'STL-紅雀', translated: 'STLカージナルス' },
        { original: 'LAD-道奇[主]', translated: 'LADドジャース[ホーム]' },
        { original: 'LAD-道奇', translated: 'LADドジャース' },
        { original: 'COL-落磯山[主]', translated: 'COLロッキーズ[ホーム]' },
        { original: 'COL-落磯山', translated: 'COLロッキーズ' },
        { original: 'SD-教士[主]', translated: 'SDパドレス[ホーム]' },
        { original: 'SD-教士', translated: 'SDパドレス' },
        { original: 'SF-巨人[主]', translated: 'SFジャイアンツ[ホーム]' },
        { original: 'SF-巨人', translated: 'SFジャイアンツ' },
        { original: 'MIA-馬林魚[主]', translated: 'MIAマーリンズ[ホーム]' },
        { original: 'MIA-馬林魚', translated: 'MIAマーリンズ' },
        { original: 'NYM-大都會[主]', translated: 'NYMメッツ[ホーム]' },
        { original: 'NYM-大都會', translated: 'NYMメッツ' },
        { original: 'PHI-費城人[主]', translated: 'PHIフィリーズ[ホーム]' },
        { original: 'PHI-費城人', translated: 'PHIフィリーズ' },
        { original: 'WAS-國民[主]', translated: 'WSHナショナルズ[ホーム]' },
        { original: 'WAS-國民', translated: 'WSHナショナルズ' },
        { original: '美棒', translated: 'MLB' },
        { original: '美國職棒', translated: 'MLB' },
        { original: 'MLB 美國職棒', translated: 'MLB' },
        { original: '主客隊伍', translated: 'チーム' },
        { original: '滾球', translated:'ライブ'},
        { original: '大小盤', translated: 'トータル'},
        { original: '大小', translated: 'トータル'},
        { original: '讓球', translated: 'ランライン'},
        { original: '讓分', translated: 'ランライン'},
        { original: '上半大小', translated:'前半トータル'},
        { original: '上半讓球', translated:'前半ランライン'},
        { original: '獨贏', translated:'単勝'},
        { original: '一輸二贏', translated:'1点負け2点勝ち'},
        { original: '單雙', translated:'奇数/偶数'},
        { original: '葡萄牙聯賽', translated: ''},
        { original: '英格蘭職業聯賽)', translated: ''}
    


    ];
    
            
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

    const allDiv = document.querySelectorAll('p, div, span');
    allDiv.forEach((div) => {
    translations.forEach((translation) => {
        div.textContent = div.textContent.replace(translation.original, translation.translated);
    });
});
}



setInterval(translatePage, 500);
