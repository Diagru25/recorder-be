import { SuggestService } from './../modules/database/services/tbl_suggest.service';
import { Inject, Logger } from '@nestjs/common';
import {WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody} from '@nestjs/websockets';
import {Server} from 'socket.io';

@WebSocketGateway(3002)
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    
    private logger = new Logger(AppGateway.name);

    @WebSocketServer() server: Server

    @Inject(SuggestService)
    suggestService: SuggestService

    afterInit(server: Server) {
        this.logger.log('Khởi tạo gateway thành công')
    }

    handleConnection(client: any, ...args: any[]) {
        this.logger.log('Kết nối thành công');
    }

    handleDisconnect(client: any) {
        this.logger.log('Ngắt kết nối')
    }

    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string) {
        return data
    }
}