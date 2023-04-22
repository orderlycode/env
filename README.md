# env
환경변수 초기화에 schema 검증을 한다.
dotenv를 사용하기 때문에 그에 맞춰서 .env 파일을 생성하면 된다.

## 예제
```typescript
import * as dotenv from "dotenv";
import {initEnv, z} from '@orderlycode/env';

dontenv.config();
const env = initEnv({
  name: z.string(),
  age: z.string().transform(Number),
});
```
