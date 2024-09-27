import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { I18nContext, I18nService } from 'nestjs-i18n';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private readonly i18n: I18nService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);
    if (!token) throw new UnauthorizedException('as');
    try {
      const payload = this.jwtService.verify(token);
    } catch (e) {
      console.error(e);
    }

    return true;
  }

  private extractToken(request: Request): string | undefined {
    const gf = request.cookies;
    console.log(gf);
    return request.headers.authorization?.split(' ')[1];
  }
}
