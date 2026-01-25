import { loadData } from './firebase.js';

beforeLoading();

async function initPage() {
    try {
        /*
            chants: 응원가(가사)
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
    $('#chantsList > div').remove();

    for (let i = 0; i < Object.keys(chants['team']).length; i++) {
        const name = Object.keys(chants['team'])[i].replace(/^[0-9]+_/, '');
        const lyrics = chants['team'][name];

        $('#chantsList').append(`<div glass = 'true'>${name}</div>`);
    }
}