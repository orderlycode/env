import {z as zod} from "zod";
import * as dotenv from "dotenv";
import {RawCreateParams, ZodRawShape} from "zod/lib/types";

export function initEnv<T extends ZodRawShape>(shape: T, params?: RawCreateParams) {
  dotenv.config();
  return zod.object(shape, params).parse(process.env);
}

export const z = zod;
