import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger(message: any): void {
    console.log('Je suis le logger');
    console.log(message);
  }
}
