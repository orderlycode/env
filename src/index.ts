import {z as zod} from "zod";
import {RawCreateParams, ZodRawShape} from "zod/lib/types";

export function initEnv<T extends ZodRawShape>(shape: T, params?: RawCreateParams) {
  return zod.object(shape, params).parse(process.env);
}

export const z = zod;
