const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let footballData = []; // 경기 데이터 저장

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// 데이터 추가 API
app.post('/api/add', (req, res) => {
        footballData.push(req.body);
        wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(footballData));
                }
        });
        res.sendStatus(200);
});

// WebSocket 연결 시 데이터 전송
wss.on('connection', (ws) => {
        ws.send(JSON.stringify(footballData));
});

// Render 환경을 위해 포트 자동 할당
server.listen(process.env.PORT || 3000, () => {
        console.log('Server started');
});