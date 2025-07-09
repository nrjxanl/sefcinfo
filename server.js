const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let dataA = {}; // 경기 데이터: { dateId: 경기정보 }

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// 데이터 추가/수정 API
app.post('/api/add', (req, res) => {
        const { dateId } = req.body;
        if (!dateId) return res.sendStatus(400);
        dataA[dateId] = req.body; // dateId로 경기정보 덮어쓰기
        // 모든 클라이언트에 실시간 전송
        wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(dataA));
                }
        });
        res.sendStatus(200);
});

// WebSocket 연결 시 전체 데이터 전송
wss.on('connection', (ws) => {
        ws.send(JSON.stringify(dataA));
});

// .html 없이도 접속 가능하게 라우팅
app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/:page', (req, res, next) => {
        const filePath = path.join(__dirname, 'public', req.params.page + '.html');
        res.sendFile(filePath, err => {
                if (err) next();
        });
});
app.use((req, res) => {
        res.status(404).send('페이지를 찾을 수 없습니다.');
});

server.listen(process.env.PORT || 3000, () => {
        console.log('Server started');
});