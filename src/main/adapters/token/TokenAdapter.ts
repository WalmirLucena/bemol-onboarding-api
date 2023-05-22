import { IJWTProvider, ITokenProvider } from '@data/protocols';
import { constants } from '@main/config';
import { sign, verify } from 'jsonwebtoken';

class JwtAdapter implements ITokenProvider {
  validatedToken(token: string): IJWTProvider.Payload {
    const { secret } = constants;

    try {
      const payload = <IJWTProvider.Payload>verify(token, secret);
      return payload;
    } catch {
      return null;
    }
  }

  generateToken(
    secret: string,
    expiresIn: string,
    payload: { user_id: number },
  ): { token: string } {
    const token = sign(payload, secret, { expiresIn });
    const response = { token };

    return response;
  }
}

export { JwtAdapter };
