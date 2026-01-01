import { loadData } from './firebase.js';

async function initPage() {
    try {
        /*
            dataA: A팀 전체 데이터
            
            standings: 순위
        */

    const chants = await loadData('chants');

        render(chants);
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
    }

    afterLoading();
}

initPage();

function render(chants) {
    
}