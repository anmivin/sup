import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
@Injectable()
export class PayedGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);
    if (!token) throw new UnauthorizedException('as');
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role === 'payed') return true;
      else return false;
    } catch (e) {
      console.error(e);
    }
    return true;
  }

  private extractToken(request: Request): string | undefined {
    return request.headers.authorization?.split(' ')[1];
  }
}
