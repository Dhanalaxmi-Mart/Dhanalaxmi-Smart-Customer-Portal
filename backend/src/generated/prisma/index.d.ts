
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model StampTransaction
 * 
 */
export type StampTransaction = $Result.DefaultSelection<Prisma.$StampTransactionPayload>
/**
 * Model RewardRedemption
 * 
 */
export type RewardRedemption = $Result.DefaultSelection<Prisma.$RewardRedemptionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stampTransaction`: Exposes CRUD operations for the **StampTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StampTransactions
    * const stampTransactions = await prisma.stampTransaction.findMany()
    * ```
    */
  get stampTransaction(): Prisma.StampTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewardRedemption`: Exposes CRUD operations for the **RewardRedemption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardRedemptions
    * const rewardRedemptions = await prisma.rewardRedemption.findMany()
    * ```
    */
  get rewardRedemption(): Prisma.RewardRedemptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Purchase: 'Purchase',
    StampTransaction: 'StampTransaction',
    RewardRedemption: 'RewardRedemption'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "purchase" | "stampTransaction" | "rewardRedemption"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      StampTransaction: {
        payload: Prisma.$StampTransactionPayload<ExtArgs>
        fields: Prisma.StampTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StampTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StampTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>
          }
          findFirst: {
            args: Prisma.StampTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StampTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>
          }
          findMany: {
            args: Prisma.StampTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>[]
          }
          create: {
            args: Prisma.StampTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>
          }
          createMany: {
            args: Prisma.StampTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StampTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>[]
          }
          delete: {
            args: Prisma.StampTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>
          }
          update: {
            args: Prisma.StampTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>
          }
          deleteMany: {
            args: Prisma.StampTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StampTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StampTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>[]
          }
          upsert: {
            args: Prisma.StampTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampTransactionPayload>
          }
          aggregate: {
            args: Prisma.StampTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStampTransaction>
          }
          groupBy: {
            args: Prisma.StampTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StampTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StampTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<StampTransactionCountAggregateOutputType> | number
          }
        }
      }
      RewardRedemption: {
        payload: Prisma.$RewardRedemptionPayload<ExtArgs>
        fields: Prisma.RewardRedemptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardRedemptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          findFirst: {
            args: Prisma.RewardRedemptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardRedemptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          findMany: {
            args: Prisma.RewardRedemptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[]
          }
          create: {
            args: Prisma.RewardRedemptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          createMany: {
            args: Prisma.RewardRedemptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardRedemptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[]
          }
          delete: {
            args: Prisma.RewardRedemptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          update: {
            args: Prisma.RewardRedemptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          deleteMany: {
            args: Prisma.RewardRedemptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardRedemptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardRedemptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[]
          }
          upsert: {
            args: Prisma.RewardRedemptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          aggregate: {
            args: Prisma.RewardRedemptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardRedemption>
          }
          groupBy: {
            args: Prisma.RewardRedemptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardRedemptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardRedemptionCountArgs<ExtArgs>
            result: $Utils.Optional<RewardRedemptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    purchase?: PurchaseOmit
    stampTransaction?: StampTransactionOmit
    rewardRedemption?: RewardRedemptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    purchases: number
    stampTransactions: number
    rewardRedemptions: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | CustomerCountOutputTypeCountPurchasesArgs
    stampTransactions?: boolean | CustomerCountOutputTypeCountStampTransactionsArgs
    rewardRedemptions?: boolean | CustomerCountOutputTypeCountRewardRedemptionsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountStampTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StampTransactionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountRewardRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardRedemptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    stamps: number | null
    totalVisits: number | null
    totalSpend: number | null
  }

  export type CustomerSumAggregateOutputType = {
    stamps: number | null
    totalVisits: number | null
    totalSpend: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    dob: string | null
    anniversary: string | null
    gender: string | null
    address: string | null
    stamps: number | null
    totalVisits: number | null
    totalSpend: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    dob: string | null
    anniversary: string | null
    gender: string | null
    address: string | null
    stamps: number | null
    totalVisits: number | null
    totalSpend: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    mobile: number
    dob: number
    anniversary: number
    gender: number
    address: number
    stamps: number
    totalVisits: number
    totalSpend: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    stamps?: true
    totalVisits?: true
    totalSpend?: true
  }

  export type CustomerSumAggregateInputType = {
    stamps?: true
    totalVisits?: true
    totalSpend?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    dob?: true
    anniversary?: true
    gender?: true
    address?: true
    stamps?: true
    totalVisits?: true
    totalSpend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    dob?: true
    anniversary?: true
    gender?: true
    address?: true
    stamps?: true
    totalVisits?: true
    totalSpend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    dob?: true
    anniversary?: true
    gender?: true
    address?: true
    stamps?: true
    totalVisits?: true
    totalSpend?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    mobile: string
    dob: string | null
    anniversary: string | null
    gender: string | null
    address: string | null
    stamps: number
    totalVisits: number
    totalSpend: number
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    dob?: boolean
    anniversary?: boolean
    gender?: boolean
    address?: boolean
    stamps?: boolean
    totalVisits?: boolean
    totalSpend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchases?: boolean | Customer$purchasesArgs<ExtArgs>
    stampTransactions?: boolean | Customer$stampTransactionsArgs<ExtArgs>
    rewardRedemptions?: boolean | Customer$rewardRedemptionsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    dob?: boolean
    anniversary?: boolean
    gender?: boolean
    address?: boolean
    stamps?: boolean
    totalVisits?: boolean
    totalSpend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    dob?: boolean
    anniversary?: boolean
    gender?: boolean
    address?: boolean
    stamps?: boolean
    totalVisits?: boolean
    totalSpend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    mobile?: boolean
    dob?: boolean
    anniversary?: boolean
    gender?: boolean
    address?: boolean
    stamps?: boolean
    totalVisits?: boolean
    totalSpend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mobile" | "dob" | "anniversary" | "gender" | "address" | "stamps" | "totalVisits" | "totalSpend" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | Customer$purchasesArgs<ExtArgs>
    stampTransactions?: boolean | Customer$stampTransactionsArgs<ExtArgs>
    rewardRedemptions?: boolean | Customer$rewardRedemptionsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      stampTransactions: Prisma.$StampTransactionPayload<ExtArgs>[]
      rewardRedemptions: Prisma.$RewardRedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mobile: string
      dob: string | null
      anniversary: string | null
      gender: string | null
      address: string | null
      stamps: number
      totalVisits: number
      totalSpend: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends Customer$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stampTransactions<T extends Customer$stampTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$stampTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rewardRedemptions<T extends Customer$rewardRedemptionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$rewardRedemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly dob: FieldRef<"Customer", 'String'>
    readonly anniversary: FieldRef<"Customer", 'String'>
    readonly gender: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly stamps: FieldRef<"Customer", 'Int'>
    readonly totalVisits: FieldRef<"Customer", 'Int'>
    readonly totalSpend: FieldRef<"Customer", 'Float'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.purchases
   */
  export type Customer$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Customer.stampTransactions
   */
  export type Customer$stampTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    where?: StampTransactionWhereInput
    orderBy?: StampTransactionOrderByWithRelationInput | StampTransactionOrderByWithRelationInput[]
    cursor?: StampTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StampTransactionScalarFieldEnum | StampTransactionScalarFieldEnum[]
  }

  /**
   * Customer.rewardRedemptions
   */
  export type Customer$rewardRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    where?: RewardRedemptionWhereInput
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    cursor?: RewardRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    purchaseAmount: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    purchaseAmount: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    billNumber: string | null
    purchaseAmount: number | null
    cashierName: string | null
    stampEarned: boolean | null
    stampReason: string | null
    purchaseDate: string | null
    purchaseTime: string | null
    createdAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    billNumber: string | null
    purchaseAmount: number | null
    cashierName: string | null
    stampEarned: boolean | null
    stampReason: string | null
    purchaseDate: string | null
    purchaseTime: string | null
    createdAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    customerId: number
    billNumber: number
    purchaseAmount: number
    cashierName: number
    stampEarned: number
    stampReason: number
    purchaseDate: number
    purchaseTime: number
    createdAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    purchaseAmount?: true
  }

  export type PurchaseSumAggregateInputType = {
    purchaseAmount?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    customerId?: true
    billNumber?: true
    purchaseAmount?: true
    cashierName?: true
    stampEarned?: true
    stampReason?: true
    purchaseDate?: true
    purchaseTime?: true
    createdAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    customerId?: true
    billNumber?: true
    purchaseAmount?: true
    cashierName?: true
    stampEarned?: true
    stampReason?: true
    purchaseDate?: true
    purchaseTime?: true
    createdAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    customerId?: true
    billNumber?: true
    purchaseAmount?: true
    cashierName?: true
    stampEarned?: true
    stampReason?: true
    purchaseDate?: true
    purchaseTime?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    customerId: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    stampEarned: boolean
    stampReason: string | null
    purchaseDate: string
    purchaseTime: string
    createdAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    billNumber?: boolean
    purchaseAmount?: boolean
    cashierName?: boolean
    stampEarned?: boolean
    stampReason?: boolean
    purchaseDate?: boolean
    purchaseTime?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    billNumber?: boolean
    purchaseAmount?: boolean
    cashierName?: boolean
    stampEarned?: boolean
    stampReason?: boolean
    purchaseDate?: boolean
    purchaseTime?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    billNumber?: boolean
    purchaseAmount?: boolean
    cashierName?: boolean
    stampEarned?: boolean
    stampReason?: boolean
    purchaseDate?: boolean
    purchaseTime?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    customerId?: boolean
    billNumber?: boolean
    purchaseAmount?: boolean
    cashierName?: boolean
    stampEarned?: boolean
    stampReason?: boolean
    purchaseDate?: boolean
    purchaseTime?: boolean
    createdAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "billNumber" | "purchaseAmount" | "cashierName" | "stampEarned" | "stampReason" | "purchaseDate" | "purchaseTime" | "createdAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      billNumber: string
      purchaseAmount: number
      cashierName: string
      stampEarned: boolean
      stampReason: string | null
      purchaseDate: string
      purchaseTime: string
      createdAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly customerId: FieldRef<"Purchase", 'String'>
    readonly billNumber: FieldRef<"Purchase", 'String'>
    readonly purchaseAmount: FieldRef<"Purchase", 'Float'>
    readonly cashierName: FieldRef<"Purchase", 'String'>
    readonly stampEarned: FieldRef<"Purchase", 'Boolean'>
    readonly stampReason: FieldRef<"Purchase", 'String'>
    readonly purchaseDate: FieldRef<"Purchase", 'String'>
    readonly purchaseTime: FieldRef<"Purchase", 'String'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model StampTransaction
   */

  export type AggregateStampTransaction = {
    _count: StampTransactionCountAggregateOutputType | null
    _avg: StampTransactionAvgAggregateOutputType | null
    _sum: StampTransactionSumAggregateOutputType | null
    _min: StampTransactionMinAggregateOutputType | null
    _max: StampTransactionMaxAggregateOutputType | null
  }

  export type StampTransactionAvgAggregateOutputType = {
    purchaseAmount: number | null
  }

  export type StampTransactionSumAggregateOutputType = {
    purchaseAmount: number | null
  }

  export type StampTransactionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    billNumber: string | null
    purchaseAmount: number | null
    cashierName: string | null
    transactionType: string | null
    transactionDate: string | null
    transactionTime: string | null
    createdAt: Date | null
  }

  export type StampTransactionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    billNumber: string | null
    purchaseAmount: number | null
    cashierName: string | null
    transactionType: string | null
    transactionDate: string | null
    transactionTime: string | null
    createdAt: Date | null
  }

  export type StampTransactionCountAggregateOutputType = {
    id: number
    customerId: number
    billNumber: number
    purchaseAmount: number
    cashierName: number
    transactionType: number
    transactionDate: number
    transactionTime: number
    createdAt: number
    _all: number
  }


  export type StampTransactionAvgAggregateInputType = {
    purchaseAmount?: true
  }

  export type StampTransactionSumAggregateInputType = {
    purchaseAmount?: true
  }

  export type StampTransactionMinAggregateInputType = {
    id?: true
    customerId?: true
    billNumber?: true
    purchaseAmount?: true
    cashierName?: true
    transactionType?: true
    transactionDate?: true
    transactionTime?: true
    createdAt?: true
  }

  export type StampTransactionMaxAggregateInputType = {
    id?: true
    customerId?: true
    billNumber?: true
    purchaseAmount?: true
    cashierName?: true
    transactionType?: true
    transactionDate?: true
    transactionTime?: true
    createdAt?: true
  }

  export type StampTransactionCountAggregateInputType = {
    id?: true
    customerId?: true
    billNumber?: true
    purchaseAmount?: true
    cashierName?: true
    transactionType?: true
    transactionDate?: true
    transactionTime?: true
    createdAt?: true
    _all?: true
  }

  export type StampTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StampTransaction to aggregate.
     */
    where?: StampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StampTransactions to fetch.
     */
    orderBy?: StampTransactionOrderByWithRelationInput | StampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StampTransactions
    **/
    _count?: true | StampTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StampTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StampTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StampTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StampTransactionMaxAggregateInputType
  }

  export type GetStampTransactionAggregateType<T extends StampTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateStampTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStampTransaction[P]>
      : GetScalarType<T[P], AggregateStampTransaction[P]>
  }




  export type StampTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StampTransactionWhereInput
    orderBy?: StampTransactionOrderByWithAggregationInput | StampTransactionOrderByWithAggregationInput[]
    by: StampTransactionScalarFieldEnum[] | StampTransactionScalarFieldEnum
    having?: StampTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StampTransactionCountAggregateInputType | true
    _avg?: StampTransactionAvgAggregateInputType
    _sum?: StampTransactionSumAggregateInputType
    _min?: StampTransactionMinAggregateInputType
    _max?: StampTransactionMaxAggregateInputType
  }

  export type StampTransactionGroupByOutputType = {
    id: string
    customerId: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    transactionType: string
    transactionDate: string
    transactionTime: string
    createdAt: Date
    _count: StampTransactionCountAggregateOutputType | null
    _avg: StampTransactionAvgAggregateOutputType | null
    _sum: StampTransactionSumAggregateOutputType | null
    _min: StampTransactionMinAggregateOutputType | null
    _max: StampTransactionMaxAggregateOutputType | null
  }

  type GetStampTransactionGroupByPayload<T extends StampTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StampTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StampTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StampTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], StampTransactionGroupByOutputType[P]>
        }
      >
    >


  export type StampTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    billNumber?: boolean
    purchaseAmount?: boolean
    cashierName?: boolean
    transactionType?: boolean
    transactionDate?: boolean
    transactionTime?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stampTransaction"]>

  export type StampTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    billNumber?: boolean
    purchaseAmount?: boolean
    cashierName?: boolean
    transactionType?: boolean
    transactionDate?: boolean
    transactionTime?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stampTransaction"]>

  export type StampTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    billNumber?: boolean
    purchaseAmount?: boolean
    cashierName?: boolean
    transactionType?: boolean
    transactionDate?: boolean
    transactionTime?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stampTransaction"]>

  export type StampTransactionSelectScalar = {
    id?: boolean
    customerId?: boolean
    billNumber?: boolean
    purchaseAmount?: boolean
    cashierName?: boolean
    transactionType?: boolean
    transactionDate?: boolean
    transactionTime?: boolean
    createdAt?: boolean
  }

  export type StampTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "billNumber" | "purchaseAmount" | "cashierName" | "transactionType" | "transactionDate" | "transactionTime" | "createdAt", ExtArgs["result"]["stampTransaction"]>
  export type StampTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type StampTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type StampTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $StampTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StampTransaction"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      billNumber: string
      purchaseAmount: number
      cashierName: string
      transactionType: string
      transactionDate: string
      transactionTime: string
      createdAt: Date
    }, ExtArgs["result"]["stampTransaction"]>
    composites: {}
  }

  type StampTransactionGetPayload<S extends boolean | null | undefined | StampTransactionDefaultArgs> = $Result.GetResult<Prisma.$StampTransactionPayload, S>

  type StampTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StampTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StampTransactionCountAggregateInputType | true
    }

  export interface StampTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StampTransaction'], meta: { name: 'StampTransaction' } }
    /**
     * Find zero or one StampTransaction that matches the filter.
     * @param {StampTransactionFindUniqueArgs} args - Arguments to find a StampTransaction
     * @example
     * // Get one StampTransaction
     * const stampTransaction = await prisma.stampTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StampTransactionFindUniqueArgs>(args: SelectSubset<T, StampTransactionFindUniqueArgs<ExtArgs>>): Prisma__StampTransactionClient<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StampTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StampTransactionFindUniqueOrThrowArgs} args - Arguments to find a StampTransaction
     * @example
     * // Get one StampTransaction
     * const stampTransaction = await prisma.stampTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StampTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, StampTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StampTransactionClient<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StampTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampTransactionFindFirstArgs} args - Arguments to find a StampTransaction
     * @example
     * // Get one StampTransaction
     * const stampTransaction = await prisma.stampTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StampTransactionFindFirstArgs>(args?: SelectSubset<T, StampTransactionFindFirstArgs<ExtArgs>>): Prisma__StampTransactionClient<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StampTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampTransactionFindFirstOrThrowArgs} args - Arguments to find a StampTransaction
     * @example
     * // Get one StampTransaction
     * const stampTransaction = await prisma.stampTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StampTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, StampTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StampTransactionClient<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StampTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StampTransactions
     * const stampTransactions = await prisma.stampTransaction.findMany()
     * 
     * // Get first 10 StampTransactions
     * const stampTransactions = await prisma.stampTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stampTransactionWithIdOnly = await prisma.stampTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StampTransactionFindManyArgs>(args?: SelectSubset<T, StampTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StampTransaction.
     * @param {StampTransactionCreateArgs} args - Arguments to create a StampTransaction.
     * @example
     * // Create one StampTransaction
     * const StampTransaction = await prisma.stampTransaction.create({
     *   data: {
     *     // ... data to create a StampTransaction
     *   }
     * })
     * 
     */
    create<T extends StampTransactionCreateArgs>(args: SelectSubset<T, StampTransactionCreateArgs<ExtArgs>>): Prisma__StampTransactionClient<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StampTransactions.
     * @param {StampTransactionCreateManyArgs} args - Arguments to create many StampTransactions.
     * @example
     * // Create many StampTransactions
     * const stampTransaction = await prisma.stampTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StampTransactionCreateManyArgs>(args?: SelectSubset<T, StampTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StampTransactions and returns the data saved in the database.
     * @param {StampTransactionCreateManyAndReturnArgs} args - Arguments to create many StampTransactions.
     * @example
     * // Create many StampTransactions
     * const stampTransaction = await prisma.stampTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StampTransactions and only return the `id`
     * const stampTransactionWithIdOnly = await prisma.stampTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StampTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, StampTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StampTransaction.
     * @param {StampTransactionDeleteArgs} args - Arguments to delete one StampTransaction.
     * @example
     * // Delete one StampTransaction
     * const StampTransaction = await prisma.stampTransaction.delete({
     *   where: {
     *     // ... filter to delete one StampTransaction
     *   }
     * })
     * 
     */
    delete<T extends StampTransactionDeleteArgs>(args: SelectSubset<T, StampTransactionDeleteArgs<ExtArgs>>): Prisma__StampTransactionClient<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StampTransaction.
     * @param {StampTransactionUpdateArgs} args - Arguments to update one StampTransaction.
     * @example
     * // Update one StampTransaction
     * const stampTransaction = await prisma.stampTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StampTransactionUpdateArgs>(args: SelectSubset<T, StampTransactionUpdateArgs<ExtArgs>>): Prisma__StampTransactionClient<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StampTransactions.
     * @param {StampTransactionDeleteManyArgs} args - Arguments to filter StampTransactions to delete.
     * @example
     * // Delete a few StampTransactions
     * const { count } = await prisma.stampTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StampTransactionDeleteManyArgs>(args?: SelectSubset<T, StampTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StampTransactions
     * const stampTransaction = await prisma.stampTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StampTransactionUpdateManyArgs>(args: SelectSubset<T, StampTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StampTransactions and returns the data updated in the database.
     * @param {StampTransactionUpdateManyAndReturnArgs} args - Arguments to update many StampTransactions.
     * @example
     * // Update many StampTransactions
     * const stampTransaction = await prisma.stampTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StampTransactions and only return the `id`
     * const stampTransactionWithIdOnly = await prisma.stampTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StampTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, StampTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StampTransaction.
     * @param {StampTransactionUpsertArgs} args - Arguments to update or create a StampTransaction.
     * @example
     * // Update or create a StampTransaction
     * const stampTransaction = await prisma.stampTransaction.upsert({
     *   create: {
     *     // ... data to create a StampTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StampTransaction we want to update
     *   }
     * })
     */
    upsert<T extends StampTransactionUpsertArgs>(args: SelectSubset<T, StampTransactionUpsertArgs<ExtArgs>>): Prisma__StampTransactionClient<$Result.GetResult<Prisma.$StampTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampTransactionCountArgs} args - Arguments to filter StampTransactions to count.
     * @example
     * // Count the number of StampTransactions
     * const count = await prisma.stampTransaction.count({
     *   where: {
     *     // ... the filter for the StampTransactions we want to count
     *   }
     * })
    **/
    count<T extends StampTransactionCountArgs>(
      args?: Subset<T, StampTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StampTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StampTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StampTransactionAggregateArgs>(args: Subset<T, StampTransactionAggregateArgs>): Prisma.PrismaPromise<GetStampTransactionAggregateType<T>>

    /**
     * Group by StampTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StampTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StampTransactionGroupByArgs['orderBy'] }
        : { orderBy?: StampTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StampTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStampTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StampTransaction model
   */
  readonly fields: StampTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StampTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StampTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StampTransaction model
   */
  interface StampTransactionFieldRefs {
    readonly id: FieldRef<"StampTransaction", 'String'>
    readonly customerId: FieldRef<"StampTransaction", 'String'>
    readonly billNumber: FieldRef<"StampTransaction", 'String'>
    readonly purchaseAmount: FieldRef<"StampTransaction", 'Float'>
    readonly cashierName: FieldRef<"StampTransaction", 'String'>
    readonly transactionType: FieldRef<"StampTransaction", 'String'>
    readonly transactionDate: FieldRef<"StampTransaction", 'String'>
    readonly transactionTime: FieldRef<"StampTransaction", 'String'>
    readonly createdAt: FieldRef<"StampTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StampTransaction findUnique
   */
  export type StampTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which StampTransaction to fetch.
     */
    where: StampTransactionWhereUniqueInput
  }

  /**
   * StampTransaction findUniqueOrThrow
   */
  export type StampTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which StampTransaction to fetch.
     */
    where: StampTransactionWhereUniqueInput
  }

  /**
   * StampTransaction findFirst
   */
  export type StampTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which StampTransaction to fetch.
     */
    where?: StampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StampTransactions to fetch.
     */
    orderBy?: StampTransactionOrderByWithRelationInput | StampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StampTransactions.
     */
    cursor?: StampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StampTransactions.
     */
    distinct?: StampTransactionScalarFieldEnum | StampTransactionScalarFieldEnum[]
  }

  /**
   * StampTransaction findFirstOrThrow
   */
  export type StampTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which StampTransaction to fetch.
     */
    where?: StampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StampTransactions to fetch.
     */
    orderBy?: StampTransactionOrderByWithRelationInput | StampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StampTransactions.
     */
    cursor?: StampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StampTransactions.
     */
    distinct?: StampTransactionScalarFieldEnum | StampTransactionScalarFieldEnum[]
  }

  /**
   * StampTransaction findMany
   */
  export type StampTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which StampTransactions to fetch.
     */
    where?: StampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StampTransactions to fetch.
     */
    orderBy?: StampTransactionOrderByWithRelationInput | StampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StampTransactions.
     */
    cursor?: StampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StampTransactions.
     */
    distinct?: StampTransactionScalarFieldEnum | StampTransactionScalarFieldEnum[]
  }

  /**
   * StampTransaction create
   */
  export type StampTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a StampTransaction.
     */
    data: XOR<StampTransactionCreateInput, StampTransactionUncheckedCreateInput>
  }

  /**
   * StampTransaction createMany
   */
  export type StampTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StampTransactions.
     */
    data: StampTransactionCreateManyInput | StampTransactionCreateManyInput[]
  }

  /**
   * StampTransaction createManyAndReturn
   */
  export type StampTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many StampTransactions.
     */
    data: StampTransactionCreateManyInput | StampTransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StampTransaction update
   */
  export type StampTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a StampTransaction.
     */
    data: XOR<StampTransactionUpdateInput, StampTransactionUncheckedUpdateInput>
    /**
     * Choose, which StampTransaction to update.
     */
    where: StampTransactionWhereUniqueInput
  }

  /**
   * StampTransaction updateMany
   */
  export type StampTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StampTransactions.
     */
    data: XOR<StampTransactionUpdateManyMutationInput, StampTransactionUncheckedUpdateManyInput>
    /**
     * Filter which StampTransactions to update
     */
    where?: StampTransactionWhereInput
    /**
     * Limit how many StampTransactions to update.
     */
    limit?: number
  }

  /**
   * StampTransaction updateManyAndReturn
   */
  export type StampTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * The data used to update StampTransactions.
     */
    data: XOR<StampTransactionUpdateManyMutationInput, StampTransactionUncheckedUpdateManyInput>
    /**
     * Filter which StampTransactions to update
     */
    where?: StampTransactionWhereInput
    /**
     * Limit how many StampTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StampTransaction upsert
   */
  export type StampTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the StampTransaction to update in case it exists.
     */
    where: StampTransactionWhereUniqueInput
    /**
     * In case the StampTransaction found by the `where` argument doesn't exist, create a new StampTransaction with this data.
     */
    create: XOR<StampTransactionCreateInput, StampTransactionUncheckedCreateInput>
    /**
     * In case the StampTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StampTransactionUpdateInput, StampTransactionUncheckedUpdateInput>
  }

  /**
   * StampTransaction delete
   */
  export type StampTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
    /**
     * Filter which StampTransaction to delete.
     */
    where: StampTransactionWhereUniqueInput
  }

  /**
   * StampTransaction deleteMany
   */
  export type StampTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StampTransactions to delete
     */
    where?: StampTransactionWhereInput
    /**
     * Limit how many StampTransactions to delete.
     */
    limit?: number
  }

  /**
   * StampTransaction without action
   */
  export type StampTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StampTransaction
     */
    select?: StampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StampTransaction
     */
    omit?: StampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampTransactionInclude<ExtArgs> | null
  }


  /**
   * Model RewardRedemption
   */

  export type AggregateRewardRedemption = {
    _count: RewardRedemptionCountAggregateOutputType | null
    _avg: RewardRedemptionAvgAggregateOutputType | null
    _sum: RewardRedemptionSumAggregateOutputType | null
    _min: RewardRedemptionMinAggregateOutputType | null
    _max: RewardRedemptionMaxAggregateOutputType | null
  }

  export type RewardRedemptionAvgAggregateOutputType = {
    giftValue: number | null
    stampsUsed: number | null
  }

  export type RewardRedemptionSumAggregateOutputType = {
    giftValue: number | null
    stampsUsed: number | null
  }

  export type RewardRedemptionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    giftName: string | null
    giftValue: number | null
    redeemedBy: string | null
    stampsUsed: number | null
    redemptionDate: string | null
    redemptionTime: string | null
    status: string | null
    createdAt: Date | null
  }

  export type RewardRedemptionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    giftName: string | null
    giftValue: number | null
    redeemedBy: string | null
    stampsUsed: number | null
    redemptionDate: string | null
    redemptionTime: string | null
    status: string | null
    createdAt: Date | null
  }

  export type RewardRedemptionCountAggregateOutputType = {
    id: number
    customerId: number
    giftName: number
    giftValue: number
    redeemedBy: number
    stampsUsed: number
    redemptionDate: number
    redemptionTime: number
    status: number
    createdAt: number
    _all: number
  }


  export type RewardRedemptionAvgAggregateInputType = {
    giftValue?: true
    stampsUsed?: true
  }

  export type RewardRedemptionSumAggregateInputType = {
    giftValue?: true
    stampsUsed?: true
  }

  export type RewardRedemptionMinAggregateInputType = {
    id?: true
    customerId?: true
    giftName?: true
    giftValue?: true
    redeemedBy?: true
    stampsUsed?: true
    redemptionDate?: true
    redemptionTime?: true
    status?: true
    createdAt?: true
  }

  export type RewardRedemptionMaxAggregateInputType = {
    id?: true
    customerId?: true
    giftName?: true
    giftValue?: true
    redeemedBy?: true
    stampsUsed?: true
    redemptionDate?: true
    redemptionTime?: true
    status?: true
    createdAt?: true
  }

  export type RewardRedemptionCountAggregateInputType = {
    id?: true
    customerId?: true
    giftName?: true
    giftValue?: true
    redeemedBy?: true
    stampsUsed?: true
    redemptionDate?: true
    redemptionTime?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type RewardRedemptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardRedemption to aggregate.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardRedemptions
    **/
    _count?: true | RewardRedemptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardRedemptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardRedemptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardRedemptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardRedemptionMaxAggregateInputType
  }

  export type GetRewardRedemptionAggregateType<T extends RewardRedemptionAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardRedemption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardRedemption[P]>
      : GetScalarType<T[P], AggregateRewardRedemption[P]>
  }




  export type RewardRedemptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardRedemptionWhereInput
    orderBy?: RewardRedemptionOrderByWithAggregationInput | RewardRedemptionOrderByWithAggregationInput[]
    by: RewardRedemptionScalarFieldEnum[] | RewardRedemptionScalarFieldEnum
    having?: RewardRedemptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardRedemptionCountAggregateInputType | true
    _avg?: RewardRedemptionAvgAggregateInputType
    _sum?: RewardRedemptionSumAggregateInputType
    _min?: RewardRedemptionMinAggregateInputType
    _max?: RewardRedemptionMaxAggregateInputType
  }

  export type RewardRedemptionGroupByOutputType = {
    id: string
    customerId: string
    giftName: string
    giftValue: number
    redeemedBy: string
    stampsUsed: number
    redemptionDate: string
    redemptionTime: string
    status: string
    createdAt: Date
    _count: RewardRedemptionCountAggregateOutputType | null
    _avg: RewardRedemptionAvgAggregateOutputType | null
    _sum: RewardRedemptionSumAggregateOutputType | null
    _min: RewardRedemptionMinAggregateOutputType | null
    _max: RewardRedemptionMaxAggregateOutputType | null
  }

  type GetRewardRedemptionGroupByPayload<T extends RewardRedemptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardRedemptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardRedemptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]>
            : GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]>
        }
      >
    >


  export type RewardRedemptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    giftName?: boolean
    giftValue?: boolean
    redeemedBy?: boolean
    stampsUsed?: boolean
    redemptionDate?: boolean
    redemptionTime?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardRedemption"]>

  export type RewardRedemptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    giftName?: boolean
    giftValue?: boolean
    redeemedBy?: boolean
    stampsUsed?: boolean
    redemptionDate?: boolean
    redemptionTime?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardRedemption"]>

  export type RewardRedemptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    giftName?: boolean
    giftValue?: boolean
    redeemedBy?: boolean
    stampsUsed?: boolean
    redemptionDate?: boolean
    redemptionTime?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardRedemption"]>

  export type RewardRedemptionSelectScalar = {
    id?: boolean
    customerId?: boolean
    giftName?: boolean
    giftValue?: boolean
    redeemedBy?: boolean
    stampsUsed?: boolean
    redemptionDate?: boolean
    redemptionTime?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type RewardRedemptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "giftName" | "giftValue" | "redeemedBy" | "stampsUsed" | "redemptionDate" | "redemptionTime" | "status" | "createdAt", ExtArgs["result"]["rewardRedemption"]>
  export type RewardRedemptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type RewardRedemptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type RewardRedemptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $RewardRedemptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardRedemption"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      giftName: string
      giftValue: number
      redeemedBy: string
      stampsUsed: number
      redemptionDate: string
      redemptionTime: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["rewardRedemption"]>
    composites: {}
  }

  type RewardRedemptionGetPayload<S extends boolean | null | undefined | RewardRedemptionDefaultArgs> = $Result.GetResult<Prisma.$RewardRedemptionPayload, S>

  type RewardRedemptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardRedemptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardRedemptionCountAggregateInputType | true
    }

  export interface RewardRedemptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardRedemption'], meta: { name: 'RewardRedemption' } }
    /**
     * Find zero or one RewardRedemption that matches the filter.
     * @param {RewardRedemptionFindUniqueArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardRedemptionFindUniqueArgs>(args: SelectSubset<T, RewardRedemptionFindUniqueArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RewardRedemption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardRedemptionFindUniqueOrThrowArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardRedemptionFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardRedemption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindFirstArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardRedemptionFindFirstArgs>(args?: SelectSubset<T, RewardRedemptionFindFirstArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardRedemption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindFirstOrThrowArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardRedemptionFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardRedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RewardRedemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardRedemptions
     * const rewardRedemptions = await prisma.rewardRedemption.findMany()
     * 
     * // Get first 10 RewardRedemptions
     * const rewardRedemptions = await prisma.rewardRedemption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardRedemptionWithIdOnly = await prisma.rewardRedemption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardRedemptionFindManyArgs>(args?: SelectSubset<T, RewardRedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RewardRedemption.
     * @param {RewardRedemptionCreateArgs} args - Arguments to create a RewardRedemption.
     * @example
     * // Create one RewardRedemption
     * const RewardRedemption = await prisma.rewardRedemption.create({
     *   data: {
     *     // ... data to create a RewardRedemption
     *   }
     * })
     * 
     */
    create<T extends RewardRedemptionCreateArgs>(args: SelectSubset<T, RewardRedemptionCreateArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RewardRedemptions.
     * @param {RewardRedemptionCreateManyArgs} args - Arguments to create many RewardRedemptions.
     * @example
     * // Create many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardRedemptionCreateManyArgs>(args?: SelectSubset<T, RewardRedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RewardRedemptions and returns the data saved in the database.
     * @param {RewardRedemptionCreateManyAndReturnArgs} args - Arguments to create many RewardRedemptions.
     * @example
     * // Create many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RewardRedemptions and only return the `id`
     * const rewardRedemptionWithIdOnly = await prisma.rewardRedemption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardRedemptionCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardRedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RewardRedemption.
     * @param {RewardRedemptionDeleteArgs} args - Arguments to delete one RewardRedemption.
     * @example
     * // Delete one RewardRedemption
     * const RewardRedemption = await prisma.rewardRedemption.delete({
     *   where: {
     *     // ... filter to delete one RewardRedemption
     *   }
     * })
     * 
     */
    delete<T extends RewardRedemptionDeleteArgs>(args: SelectSubset<T, RewardRedemptionDeleteArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RewardRedemption.
     * @param {RewardRedemptionUpdateArgs} args - Arguments to update one RewardRedemption.
     * @example
     * // Update one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardRedemptionUpdateArgs>(args: SelectSubset<T, RewardRedemptionUpdateArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RewardRedemptions.
     * @param {RewardRedemptionDeleteManyArgs} args - Arguments to filter RewardRedemptions to delete.
     * @example
     * // Delete a few RewardRedemptions
     * const { count } = await prisma.rewardRedemption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardRedemptionDeleteManyArgs>(args?: SelectSubset<T, RewardRedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardRedemptionUpdateManyArgs>(args: SelectSubset<T, RewardRedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardRedemptions and returns the data updated in the database.
     * @param {RewardRedemptionUpdateManyAndReturnArgs} args - Arguments to update many RewardRedemptions.
     * @example
     * // Update many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RewardRedemptions and only return the `id`
     * const rewardRedemptionWithIdOnly = await prisma.rewardRedemption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardRedemptionUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardRedemptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RewardRedemption.
     * @param {RewardRedemptionUpsertArgs} args - Arguments to update or create a RewardRedemption.
     * @example
     * // Update or create a RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.upsert({
     *   create: {
     *     // ... data to create a RewardRedemption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardRedemption we want to update
     *   }
     * })
     */
    upsert<T extends RewardRedemptionUpsertArgs>(args: SelectSubset<T, RewardRedemptionUpsertArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RewardRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionCountArgs} args - Arguments to filter RewardRedemptions to count.
     * @example
     * // Count the number of RewardRedemptions
     * const count = await prisma.rewardRedemption.count({
     *   where: {
     *     // ... the filter for the RewardRedemptions we want to count
     *   }
     * })
    **/
    count<T extends RewardRedemptionCountArgs>(
      args?: Subset<T, RewardRedemptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardRedemptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardRedemptionAggregateArgs>(args: Subset<T, RewardRedemptionAggregateArgs>): Prisma.PrismaPromise<GetRewardRedemptionAggregateType<T>>

    /**
     * Group by RewardRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardRedemptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardRedemptionGroupByArgs['orderBy'] }
        : { orderBy?: RewardRedemptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardRedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardRedemption model
   */
  readonly fields: RewardRedemptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardRedemption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardRedemptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RewardRedemption model
   */
  interface RewardRedemptionFieldRefs {
    readonly id: FieldRef<"RewardRedemption", 'String'>
    readonly customerId: FieldRef<"RewardRedemption", 'String'>
    readonly giftName: FieldRef<"RewardRedemption", 'String'>
    readonly giftValue: FieldRef<"RewardRedemption", 'Float'>
    readonly redeemedBy: FieldRef<"RewardRedemption", 'String'>
    readonly stampsUsed: FieldRef<"RewardRedemption", 'Int'>
    readonly redemptionDate: FieldRef<"RewardRedemption", 'String'>
    readonly redemptionTime: FieldRef<"RewardRedemption", 'String'>
    readonly status: FieldRef<"RewardRedemption", 'String'>
    readonly createdAt: FieldRef<"RewardRedemption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RewardRedemption findUnique
   */
  export type RewardRedemptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption findUniqueOrThrow
   */
  export type RewardRedemptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption findFirst
   */
  export type RewardRedemptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardRedemptions.
     */
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption findFirstOrThrow
   */
  export type RewardRedemptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardRedemptions.
     */
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption findMany
   */
  export type RewardRedemptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemptions to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardRedemptions.
     */
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption create
   */
  export type RewardRedemptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to create a RewardRedemption.
     */
    data: XOR<RewardRedemptionCreateInput, RewardRedemptionUncheckedCreateInput>
  }

  /**
   * RewardRedemption createMany
   */
  export type RewardRedemptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardRedemptions.
     */
    data: RewardRedemptionCreateManyInput | RewardRedemptionCreateManyInput[]
  }

  /**
   * RewardRedemption createManyAndReturn
   */
  export type RewardRedemptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * The data used to create many RewardRedemptions.
     */
    data: RewardRedemptionCreateManyInput | RewardRedemptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardRedemption update
   */
  export type RewardRedemptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to update a RewardRedemption.
     */
    data: XOR<RewardRedemptionUpdateInput, RewardRedemptionUncheckedUpdateInput>
    /**
     * Choose, which RewardRedemption to update.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption updateMany
   */
  export type RewardRedemptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardRedemptions.
     */
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyInput>
    /**
     * Filter which RewardRedemptions to update
     */
    where?: RewardRedemptionWhereInput
    /**
     * Limit how many RewardRedemptions to update.
     */
    limit?: number
  }

  /**
   * RewardRedemption updateManyAndReturn
   */
  export type RewardRedemptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * The data used to update RewardRedemptions.
     */
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyInput>
    /**
     * Filter which RewardRedemptions to update
     */
    where?: RewardRedemptionWhereInput
    /**
     * Limit how many RewardRedemptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardRedemption upsert
   */
  export type RewardRedemptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The filter to search for the RewardRedemption to update in case it exists.
     */
    where: RewardRedemptionWhereUniqueInput
    /**
     * In case the RewardRedemption found by the `where` argument doesn't exist, create a new RewardRedemption with this data.
     */
    create: XOR<RewardRedemptionCreateInput, RewardRedemptionUncheckedCreateInput>
    /**
     * In case the RewardRedemption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardRedemptionUpdateInput, RewardRedemptionUncheckedUpdateInput>
  }

  /**
   * RewardRedemption delete
   */
  export type RewardRedemptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter which RewardRedemption to delete.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption deleteMany
   */
  export type RewardRedemptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardRedemptions to delete
     */
    where?: RewardRedemptionWhereInput
    /**
     * Limit how many RewardRedemptions to delete.
     */
    limit?: number
  }

  /**
   * RewardRedemption without action
   */
  export type RewardRedemptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mobile: 'mobile',
    dob: 'dob',
    anniversary: 'anniversary',
    gender: 'gender',
    address: 'address',
    stamps: 'stamps',
    totalVisits: 'totalVisits',
    totalSpend: 'totalSpend',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    billNumber: 'billNumber',
    purchaseAmount: 'purchaseAmount',
    cashierName: 'cashierName',
    stampEarned: 'stampEarned',
    stampReason: 'stampReason',
    purchaseDate: 'purchaseDate',
    purchaseTime: 'purchaseTime',
    createdAt: 'createdAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const StampTransactionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    billNumber: 'billNumber',
    purchaseAmount: 'purchaseAmount',
    cashierName: 'cashierName',
    transactionType: 'transactionType',
    transactionDate: 'transactionDate',
    transactionTime: 'transactionTime',
    createdAt: 'createdAt'
  };

  export type StampTransactionScalarFieldEnum = (typeof StampTransactionScalarFieldEnum)[keyof typeof StampTransactionScalarFieldEnum]


  export const RewardRedemptionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    giftName: 'giftName',
    giftValue: 'giftValue',
    redeemedBy: 'redeemedBy',
    stampsUsed: 'stampsUsed',
    redemptionDate: 'redemptionDate',
    redemptionTime: 'redemptionTime',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type RewardRedemptionScalarFieldEnum = (typeof RewardRedemptionScalarFieldEnum)[keyof typeof RewardRedemptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    mobile?: StringFilter<"Customer"> | string
    dob?: StringNullableFilter<"Customer"> | string | null
    anniversary?: StringNullableFilter<"Customer"> | string | null
    gender?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    stamps?: IntFilter<"Customer"> | number
    totalVisits?: IntFilter<"Customer"> | number
    totalSpend?: FloatFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    purchases?: PurchaseListRelationFilter
    stampTransactions?: StampTransactionListRelationFilter
    rewardRedemptions?: RewardRedemptionListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    dob?: SortOrderInput | SortOrder
    anniversary?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    stamps?: SortOrder
    totalVisits?: SortOrder
    totalSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    stampTransactions?: StampTransactionOrderByRelationAggregateInput
    rewardRedemptions?: RewardRedemptionOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    dob?: StringNullableFilter<"Customer"> | string | null
    anniversary?: StringNullableFilter<"Customer"> | string | null
    gender?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    stamps?: IntFilter<"Customer"> | number
    totalVisits?: IntFilter<"Customer"> | number
    totalSpend?: FloatFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    purchases?: PurchaseListRelationFilter
    stampTransactions?: StampTransactionListRelationFilter
    rewardRedemptions?: RewardRedemptionListRelationFilter
  }, "id" | "mobile">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    dob?: SortOrderInput | SortOrder
    anniversary?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    stamps?: SortOrder
    totalVisits?: SortOrder
    totalSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    mobile?: StringWithAggregatesFilter<"Customer"> | string
    dob?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    anniversary?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    stamps?: IntWithAggregatesFilter<"Customer"> | number
    totalVisits?: IntWithAggregatesFilter<"Customer"> | number
    totalSpend?: FloatWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    customerId?: StringFilter<"Purchase"> | string
    billNumber?: StringFilter<"Purchase"> | string
    purchaseAmount?: FloatFilter<"Purchase"> | number
    cashierName?: StringFilter<"Purchase"> | string
    stampEarned?: BoolFilter<"Purchase"> | boolean
    stampReason?: StringNullableFilter<"Purchase"> | string | null
    purchaseDate?: StringFilter<"Purchase"> | string
    purchaseTime?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    stampEarned?: SortOrder
    stampReason?: SortOrderInput | SortOrder
    purchaseDate?: SortOrder
    purchaseTime?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    billNumber?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    customerId?: StringFilter<"Purchase"> | string
    purchaseAmount?: FloatFilter<"Purchase"> | number
    cashierName?: StringFilter<"Purchase"> | string
    stampEarned?: BoolFilter<"Purchase"> | boolean
    stampReason?: StringNullableFilter<"Purchase"> | string | null
    purchaseDate?: StringFilter<"Purchase"> | string
    purchaseTime?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "billNumber">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    stampEarned?: SortOrder
    stampReason?: SortOrderInput | SortOrder
    purchaseDate?: SortOrder
    purchaseTime?: SortOrder
    createdAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    customerId?: StringWithAggregatesFilter<"Purchase"> | string
    billNumber?: StringWithAggregatesFilter<"Purchase"> | string
    purchaseAmount?: FloatWithAggregatesFilter<"Purchase"> | number
    cashierName?: StringWithAggregatesFilter<"Purchase"> | string
    stampEarned?: BoolWithAggregatesFilter<"Purchase"> | boolean
    stampReason?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    purchaseDate?: StringWithAggregatesFilter<"Purchase"> | string
    purchaseTime?: StringWithAggregatesFilter<"Purchase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type StampTransactionWhereInput = {
    AND?: StampTransactionWhereInput | StampTransactionWhereInput[]
    OR?: StampTransactionWhereInput[]
    NOT?: StampTransactionWhereInput | StampTransactionWhereInput[]
    id?: StringFilter<"StampTransaction"> | string
    customerId?: StringFilter<"StampTransaction"> | string
    billNumber?: StringFilter<"StampTransaction"> | string
    purchaseAmount?: FloatFilter<"StampTransaction"> | number
    cashierName?: StringFilter<"StampTransaction"> | string
    transactionType?: StringFilter<"StampTransaction"> | string
    transactionDate?: StringFilter<"StampTransaction"> | string
    transactionTime?: StringFilter<"StampTransaction"> | string
    createdAt?: DateTimeFilter<"StampTransaction"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type StampTransactionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    transactionType?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type StampTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StampTransactionWhereInput | StampTransactionWhereInput[]
    OR?: StampTransactionWhereInput[]
    NOT?: StampTransactionWhereInput | StampTransactionWhereInput[]
    customerId?: StringFilter<"StampTransaction"> | string
    billNumber?: StringFilter<"StampTransaction"> | string
    purchaseAmount?: FloatFilter<"StampTransaction"> | number
    cashierName?: StringFilter<"StampTransaction"> | string
    transactionType?: StringFilter<"StampTransaction"> | string
    transactionDate?: StringFilter<"StampTransaction"> | string
    transactionTime?: StringFilter<"StampTransaction"> | string
    createdAt?: DateTimeFilter<"StampTransaction"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type StampTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    transactionType?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    createdAt?: SortOrder
    _count?: StampTransactionCountOrderByAggregateInput
    _avg?: StampTransactionAvgOrderByAggregateInput
    _max?: StampTransactionMaxOrderByAggregateInput
    _min?: StampTransactionMinOrderByAggregateInput
    _sum?: StampTransactionSumOrderByAggregateInput
  }

  export type StampTransactionScalarWhereWithAggregatesInput = {
    AND?: StampTransactionScalarWhereWithAggregatesInput | StampTransactionScalarWhereWithAggregatesInput[]
    OR?: StampTransactionScalarWhereWithAggregatesInput[]
    NOT?: StampTransactionScalarWhereWithAggregatesInput | StampTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StampTransaction"> | string
    customerId?: StringWithAggregatesFilter<"StampTransaction"> | string
    billNumber?: StringWithAggregatesFilter<"StampTransaction"> | string
    purchaseAmount?: FloatWithAggregatesFilter<"StampTransaction"> | number
    cashierName?: StringWithAggregatesFilter<"StampTransaction"> | string
    transactionType?: StringWithAggregatesFilter<"StampTransaction"> | string
    transactionDate?: StringWithAggregatesFilter<"StampTransaction"> | string
    transactionTime?: StringWithAggregatesFilter<"StampTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StampTransaction"> | Date | string
  }

  export type RewardRedemptionWhereInput = {
    AND?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    OR?: RewardRedemptionWhereInput[]
    NOT?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    id?: StringFilter<"RewardRedemption"> | string
    customerId?: StringFilter<"RewardRedemption"> | string
    giftName?: StringFilter<"RewardRedemption"> | string
    giftValue?: FloatFilter<"RewardRedemption"> | number
    redeemedBy?: StringFilter<"RewardRedemption"> | string
    stampsUsed?: IntFilter<"RewardRedemption"> | number
    redemptionDate?: StringFilter<"RewardRedemption"> | string
    redemptionTime?: StringFilter<"RewardRedemption"> | string
    status?: StringFilter<"RewardRedemption"> | string
    createdAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type RewardRedemptionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    giftName?: SortOrder
    giftValue?: SortOrder
    redeemedBy?: SortOrder
    stampsUsed?: SortOrder
    redemptionDate?: SortOrder
    redemptionTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type RewardRedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    OR?: RewardRedemptionWhereInput[]
    NOT?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    customerId?: StringFilter<"RewardRedemption"> | string
    giftName?: StringFilter<"RewardRedemption"> | string
    giftValue?: FloatFilter<"RewardRedemption"> | number
    redeemedBy?: StringFilter<"RewardRedemption"> | string
    stampsUsed?: IntFilter<"RewardRedemption"> | number
    redemptionDate?: StringFilter<"RewardRedemption"> | string
    redemptionTime?: StringFilter<"RewardRedemption"> | string
    status?: StringFilter<"RewardRedemption"> | string
    createdAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type RewardRedemptionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    giftName?: SortOrder
    giftValue?: SortOrder
    redeemedBy?: SortOrder
    stampsUsed?: SortOrder
    redemptionDate?: SortOrder
    redemptionTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: RewardRedemptionCountOrderByAggregateInput
    _avg?: RewardRedemptionAvgOrderByAggregateInput
    _max?: RewardRedemptionMaxOrderByAggregateInput
    _min?: RewardRedemptionMinOrderByAggregateInput
    _sum?: RewardRedemptionSumOrderByAggregateInput
  }

  export type RewardRedemptionScalarWhereWithAggregatesInput = {
    AND?: RewardRedemptionScalarWhereWithAggregatesInput | RewardRedemptionScalarWhereWithAggregatesInput[]
    OR?: RewardRedemptionScalarWhereWithAggregatesInput[]
    NOT?: RewardRedemptionScalarWhereWithAggregatesInput | RewardRedemptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RewardRedemption"> | string
    customerId?: StringWithAggregatesFilter<"RewardRedemption"> | string
    giftName?: StringWithAggregatesFilter<"RewardRedemption"> | string
    giftValue?: FloatWithAggregatesFilter<"RewardRedemption"> | number
    redeemedBy?: StringWithAggregatesFilter<"RewardRedemption"> | string
    stampsUsed?: IntWithAggregatesFilter<"RewardRedemption"> | number
    redemptionDate?: StringWithAggregatesFilter<"RewardRedemption"> | string
    redemptionTime?: StringWithAggregatesFilter<"RewardRedemption"> | string
    status?: StringWithAggregatesFilter<"RewardRedemption"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RewardRedemption"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutCustomerInput
    stampTransactions?: StampTransactionCreateNestedManyWithoutCustomerInput
    rewardRedemptions?: RewardRedemptionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCustomerInput
    stampTransactions?: StampTransactionUncheckedCreateNestedManyWithoutCustomerInput
    rewardRedemptions?: RewardRedemptionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutCustomerNestedInput
    stampTransactions?: StampTransactionUpdateManyWithoutCustomerNestedInput
    rewardRedemptions?: RewardRedemptionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCustomerNestedInput
    stampTransactions?: StampTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    rewardRedemptions?: RewardRedemptionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    stampEarned?: boolean
    stampReason?: string | null
    purchaseDate: string
    purchaseTime: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    customerId: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    stampEarned?: boolean
    stampReason?: string | null
    purchaseDate: string
    purchaseTime: string
    createdAt?: Date | string
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    stampEarned?: BoolFieldUpdateOperationsInput | boolean
    stampReason?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: StringFieldUpdateOperationsInput | string
    purchaseTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    stampEarned?: BoolFieldUpdateOperationsInput | boolean
    stampReason?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: StringFieldUpdateOperationsInput | string
    purchaseTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: string
    customerId: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    stampEarned?: boolean
    stampReason?: string | null
    purchaseDate: string
    purchaseTime: string
    createdAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    stampEarned?: BoolFieldUpdateOperationsInput | boolean
    stampReason?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: StringFieldUpdateOperationsInput | string
    purchaseTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    stampEarned?: BoolFieldUpdateOperationsInput | boolean
    stampReason?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: StringFieldUpdateOperationsInput | string
    purchaseTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StampTransactionCreateInput = {
    id?: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    transactionType: string
    transactionDate: string
    transactionTime: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutStampTransactionsInput
  }

  export type StampTransactionUncheckedCreateInput = {
    id?: string
    customerId: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    transactionType: string
    transactionDate: string
    transactionTime: string
    createdAt?: Date | string
  }

  export type StampTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionDate?: StringFieldUpdateOperationsInput | string
    transactionTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutStampTransactionsNestedInput
  }

  export type StampTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionDate?: StringFieldUpdateOperationsInput | string
    transactionTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StampTransactionCreateManyInput = {
    id?: string
    customerId: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    transactionType: string
    transactionDate: string
    transactionTime: string
    createdAt?: Date | string
  }

  export type StampTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionDate?: StringFieldUpdateOperationsInput | string
    transactionTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StampTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionDate?: StringFieldUpdateOperationsInput | string
    transactionTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardRedemptionCreateInput = {
    id?: string
    giftName: string
    giftValue: number
    redeemedBy: string
    stampsUsed?: number
    redemptionDate: string
    redemptionTime: string
    status?: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutRewardRedemptionsInput
  }

  export type RewardRedemptionUncheckedCreateInput = {
    id?: string
    customerId: string
    giftName: string
    giftValue: number
    redeemedBy: string
    stampsUsed?: number
    redemptionDate: string
    redemptionTime: string
    status?: string
    createdAt?: Date | string
  }

  export type RewardRedemptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    giftName?: StringFieldUpdateOperationsInput | string
    giftValue?: FloatFieldUpdateOperationsInput | number
    redeemedBy?: StringFieldUpdateOperationsInput | string
    stampsUsed?: IntFieldUpdateOperationsInput | number
    redemptionDate?: StringFieldUpdateOperationsInput | string
    redemptionTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutRewardRedemptionsNestedInput
  }

  export type RewardRedemptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    giftName?: StringFieldUpdateOperationsInput | string
    giftValue?: FloatFieldUpdateOperationsInput | number
    redeemedBy?: StringFieldUpdateOperationsInput | string
    stampsUsed?: IntFieldUpdateOperationsInput | number
    redemptionDate?: StringFieldUpdateOperationsInput | string
    redemptionTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardRedemptionCreateManyInput = {
    id?: string
    customerId: string
    giftName: string
    giftValue: number
    redeemedBy: string
    stampsUsed?: number
    redemptionDate: string
    redemptionTime: string
    status?: string
    createdAt?: Date | string
  }

  export type RewardRedemptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    giftName?: StringFieldUpdateOperationsInput | string
    giftValue?: FloatFieldUpdateOperationsInput | number
    redeemedBy?: StringFieldUpdateOperationsInput | string
    stampsUsed?: IntFieldUpdateOperationsInput | number
    redemptionDate?: StringFieldUpdateOperationsInput | string
    redemptionTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardRedemptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    giftName?: StringFieldUpdateOperationsInput | string
    giftValue?: FloatFieldUpdateOperationsInput | number
    redeemedBy?: StringFieldUpdateOperationsInput | string
    stampsUsed?: IntFieldUpdateOperationsInput | number
    redemptionDate?: StringFieldUpdateOperationsInput | string
    redemptionTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type StampTransactionListRelationFilter = {
    every?: StampTransactionWhereInput
    some?: StampTransactionWhereInput
    none?: StampTransactionWhereInput
  }

  export type RewardRedemptionListRelationFilter = {
    every?: RewardRedemptionWhereInput
    some?: RewardRedemptionWhereInput
    none?: RewardRedemptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StampTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardRedemptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    dob?: SortOrder
    anniversary?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    stamps?: SortOrder
    totalVisits?: SortOrder
    totalSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    stamps?: SortOrder
    totalVisits?: SortOrder
    totalSpend?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    dob?: SortOrder
    anniversary?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    stamps?: SortOrder
    totalVisits?: SortOrder
    totalSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    dob?: SortOrder
    anniversary?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    stamps?: SortOrder
    totalVisits?: SortOrder
    totalSpend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    stamps?: SortOrder
    totalVisits?: SortOrder
    totalSpend?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    stampEarned?: SortOrder
    stampReason?: SortOrder
    purchaseDate?: SortOrder
    purchaseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    purchaseAmount?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    stampEarned?: SortOrder
    stampReason?: SortOrder
    purchaseDate?: SortOrder
    purchaseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    stampEarned?: SortOrder
    stampReason?: SortOrder
    purchaseDate?: SortOrder
    purchaseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    purchaseAmount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StampTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    transactionType?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    createdAt?: SortOrder
  }

  export type StampTransactionAvgOrderByAggregateInput = {
    purchaseAmount?: SortOrder
  }

  export type StampTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    transactionType?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    createdAt?: SortOrder
  }

  export type StampTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    billNumber?: SortOrder
    purchaseAmount?: SortOrder
    cashierName?: SortOrder
    transactionType?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    createdAt?: SortOrder
  }

  export type StampTransactionSumOrderByAggregateInput = {
    purchaseAmount?: SortOrder
  }

  export type RewardRedemptionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    giftName?: SortOrder
    giftValue?: SortOrder
    redeemedBy?: SortOrder
    stampsUsed?: SortOrder
    redemptionDate?: SortOrder
    redemptionTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardRedemptionAvgOrderByAggregateInput = {
    giftValue?: SortOrder
    stampsUsed?: SortOrder
  }

  export type RewardRedemptionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    giftName?: SortOrder
    giftValue?: SortOrder
    redeemedBy?: SortOrder
    stampsUsed?: SortOrder
    redemptionDate?: SortOrder
    redemptionTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardRedemptionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    giftName?: SortOrder
    giftValue?: SortOrder
    redeemedBy?: SortOrder
    stampsUsed?: SortOrder
    redemptionDate?: SortOrder
    redemptionTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardRedemptionSumOrderByAggregateInput = {
    giftValue?: SortOrder
    stampsUsed?: SortOrder
  }

  export type PurchaseCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput> | PurchaseCreateWithoutCustomerInput[] | PurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput | PurchaseCreateOrConnectWithoutCustomerInput[]
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type StampTransactionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<StampTransactionCreateWithoutCustomerInput, StampTransactionUncheckedCreateWithoutCustomerInput> | StampTransactionCreateWithoutCustomerInput[] | StampTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: StampTransactionCreateOrConnectWithoutCustomerInput | StampTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: StampTransactionCreateManyCustomerInputEnvelope
    connect?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
  }

  export type RewardRedemptionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RewardRedemptionCreateWithoutCustomerInput, RewardRedemptionUncheckedCreateWithoutCustomerInput> | RewardRedemptionCreateWithoutCustomerInput[] | RewardRedemptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutCustomerInput | RewardRedemptionCreateOrConnectWithoutCustomerInput[]
    createMany?: RewardRedemptionCreateManyCustomerInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput> | PurchaseCreateWithoutCustomerInput[] | PurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput | PurchaseCreateOrConnectWithoutCustomerInput[]
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type StampTransactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<StampTransactionCreateWithoutCustomerInput, StampTransactionUncheckedCreateWithoutCustomerInput> | StampTransactionCreateWithoutCustomerInput[] | StampTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: StampTransactionCreateOrConnectWithoutCustomerInput | StampTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: StampTransactionCreateManyCustomerInputEnvelope
    connect?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
  }

  export type RewardRedemptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RewardRedemptionCreateWithoutCustomerInput, RewardRedemptionUncheckedCreateWithoutCustomerInput> | RewardRedemptionCreateWithoutCustomerInput[] | RewardRedemptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutCustomerInput | RewardRedemptionCreateOrConnectWithoutCustomerInput[]
    createMany?: RewardRedemptionCreateManyCustomerInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PurchaseUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput> | PurchaseCreateWithoutCustomerInput[] | PurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput | PurchaseCreateOrConnectWithoutCustomerInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCustomerInput | PurchaseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCustomerInput | PurchaseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCustomerInput | PurchaseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type StampTransactionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<StampTransactionCreateWithoutCustomerInput, StampTransactionUncheckedCreateWithoutCustomerInput> | StampTransactionCreateWithoutCustomerInput[] | StampTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: StampTransactionCreateOrConnectWithoutCustomerInput | StampTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: StampTransactionUpsertWithWhereUniqueWithoutCustomerInput | StampTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: StampTransactionCreateManyCustomerInputEnvelope
    set?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
    disconnect?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
    delete?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
    connect?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
    update?: StampTransactionUpdateWithWhereUniqueWithoutCustomerInput | StampTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: StampTransactionUpdateManyWithWhereWithoutCustomerInput | StampTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: StampTransactionScalarWhereInput | StampTransactionScalarWhereInput[]
  }

  export type RewardRedemptionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutCustomerInput, RewardRedemptionUncheckedCreateWithoutCustomerInput> | RewardRedemptionCreateWithoutCustomerInput[] | RewardRedemptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutCustomerInput | RewardRedemptionCreateOrConnectWithoutCustomerInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput | RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RewardRedemptionCreateManyCustomerInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput | RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutCustomerInput | RewardRedemptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput> | PurchaseCreateWithoutCustomerInput[] | PurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput | PurchaseCreateOrConnectWithoutCustomerInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCustomerInput | PurchaseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCustomerInput | PurchaseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCustomerInput | PurchaseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type StampTransactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<StampTransactionCreateWithoutCustomerInput, StampTransactionUncheckedCreateWithoutCustomerInput> | StampTransactionCreateWithoutCustomerInput[] | StampTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: StampTransactionCreateOrConnectWithoutCustomerInput | StampTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: StampTransactionUpsertWithWhereUniqueWithoutCustomerInput | StampTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: StampTransactionCreateManyCustomerInputEnvelope
    set?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
    disconnect?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
    delete?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
    connect?: StampTransactionWhereUniqueInput | StampTransactionWhereUniqueInput[]
    update?: StampTransactionUpdateWithWhereUniqueWithoutCustomerInput | StampTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: StampTransactionUpdateManyWithWhereWithoutCustomerInput | StampTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: StampTransactionScalarWhereInput | StampTransactionScalarWhereInput[]
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutCustomerInput, RewardRedemptionUncheckedCreateWithoutCustomerInput> | RewardRedemptionCreateWithoutCustomerInput[] | RewardRedemptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutCustomerInput | RewardRedemptionCreateOrConnectWithoutCustomerInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput | RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RewardRedemptionCreateManyCustomerInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput | RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutCustomerInput | RewardRedemptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPurchasesInput
    connect?: CustomerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPurchasesInput
    upsert?: CustomerUpsertWithoutPurchasesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPurchasesInput, CustomerUpdateWithoutPurchasesInput>, CustomerUncheckedUpdateWithoutPurchasesInput>
  }

  export type CustomerCreateNestedOneWithoutStampTransactionsInput = {
    create?: XOR<CustomerCreateWithoutStampTransactionsInput, CustomerUncheckedCreateWithoutStampTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutStampTransactionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutStampTransactionsNestedInput = {
    create?: XOR<CustomerCreateWithoutStampTransactionsInput, CustomerUncheckedCreateWithoutStampTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutStampTransactionsInput
    upsert?: CustomerUpsertWithoutStampTransactionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutStampTransactionsInput, CustomerUpdateWithoutStampTransactionsInput>, CustomerUncheckedUpdateWithoutStampTransactionsInput>
  }

  export type CustomerCreateNestedOneWithoutRewardRedemptionsInput = {
    create?: XOR<CustomerCreateWithoutRewardRedemptionsInput, CustomerUncheckedCreateWithoutRewardRedemptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRewardRedemptionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutRewardRedemptionsNestedInput = {
    create?: XOR<CustomerCreateWithoutRewardRedemptionsInput, CustomerUncheckedCreateWithoutRewardRedemptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRewardRedemptionsInput
    upsert?: CustomerUpsertWithoutRewardRedemptionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRewardRedemptionsInput, CustomerUpdateWithoutRewardRedemptionsInput>, CustomerUncheckedUpdateWithoutRewardRedemptionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PurchaseCreateWithoutCustomerInput = {
    id?: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    stampEarned?: boolean
    stampReason?: string | null
    purchaseDate: string
    purchaseTime: string
    createdAt?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutCustomerInput = {
    id?: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    stampEarned?: boolean
    stampReason?: string | null
    purchaseDate: string
    purchaseTime: string
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseCreateManyCustomerInputEnvelope = {
    data: PurchaseCreateManyCustomerInput | PurchaseCreateManyCustomerInput[]
  }

  export type StampTransactionCreateWithoutCustomerInput = {
    id?: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    transactionType: string
    transactionDate: string
    transactionTime: string
    createdAt?: Date | string
  }

  export type StampTransactionUncheckedCreateWithoutCustomerInput = {
    id?: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    transactionType: string
    transactionDate: string
    transactionTime: string
    createdAt?: Date | string
  }

  export type StampTransactionCreateOrConnectWithoutCustomerInput = {
    where: StampTransactionWhereUniqueInput
    create: XOR<StampTransactionCreateWithoutCustomerInput, StampTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type StampTransactionCreateManyCustomerInputEnvelope = {
    data: StampTransactionCreateManyCustomerInput | StampTransactionCreateManyCustomerInput[]
  }

  export type RewardRedemptionCreateWithoutCustomerInput = {
    id?: string
    giftName: string
    giftValue: number
    redeemedBy: string
    stampsUsed?: number
    redemptionDate: string
    redemptionTime: string
    status?: string
    createdAt?: Date | string
  }

  export type RewardRedemptionUncheckedCreateWithoutCustomerInput = {
    id?: string
    giftName: string
    giftValue: number
    redeemedBy: string
    stampsUsed?: number
    redemptionDate: string
    redemptionTime: string
    status?: string
    createdAt?: Date | string
  }

  export type RewardRedemptionCreateOrConnectWithoutCustomerInput = {
    where: RewardRedemptionWhereUniqueInput
    create: XOR<RewardRedemptionCreateWithoutCustomerInput, RewardRedemptionUncheckedCreateWithoutCustomerInput>
  }

  export type RewardRedemptionCreateManyCustomerInputEnvelope = {
    data: RewardRedemptionCreateManyCustomerInput | RewardRedemptionCreateManyCustomerInput[]
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCustomerInput, PurchaseUncheckedUpdateWithoutCustomerInput>
    create: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCustomerInput, PurchaseUncheckedUpdateWithoutCustomerInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCustomerInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    customerId?: StringFilter<"Purchase"> | string
    billNumber?: StringFilter<"Purchase"> | string
    purchaseAmount?: FloatFilter<"Purchase"> | number
    cashierName?: StringFilter<"Purchase"> | string
    stampEarned?: BoolFilter<"Purchase"> | boolean
    stampReason?: StringNullableFilter<"Purchase"> | string | null
    purchaseDate?: StringFilter<"Purchase"> | string
    purchaseTime?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type StampTransactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: StampTransactionWhereUniqueInput
    update: XOR<StampTransactionUpdateWithoutCustomerInput, StampTransactionUncheckedUpdateWithoutCustomerInput>
    create: XOR<StampTransactionCreateWithoutCustomerInput, StampTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type StampTransactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: StampTransactionWhereUniqueInput
    data: XOR<StampTransactionUpdateWithoutCustomerInput, StampTransactionUncheckedUpdateWithoutCustomerInput>
  }

  export type StampTransactionUpdateManyWithWhereWithoutCustomerInput = {
    where: StampTransactionScalarWhereInput
    data: XOR<StampTransactionUpdateManyMutationInput, StampTransactionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type StampTransactionScalarWhereInput = {
    AND?: StampTransactionScalarWhereInput | StampTransactionScalarWhereInput[]
    OR?: StampTransactionScalarWhereInput[]
    NOT?: StampTransactionScalarWhereInput | StampTransactionScalarWhereInput[]
    id?: StringFilter<"StampTransaction"> | string
    customerId?: StringFilter<"StampTransaction"> | string
    billNumber?: StringFilter<"StampTransaction"> | string
    purchaseAmount?: FloatFilter<"StampTransaction"> | number
    cashierName?: StringFilter<"StampTransaction"> | string
    transactionType?: StringFilter<"StampTransaction"> | string
    transactionDate?: StringFilter<"StampTransaction"> | string
    transactionTime?: StringFilter<"StampTransaction"> | string
    createdAt?: DateTimeFilter<"StampTransaction"> | Date | string
  }

  export type RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: RewardRedemptionWhereUniqueInput
    update: XOR<RewardRedemptionUpdateWithoutCustomerInput, RewardRedemptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<RewardRedemptionCreateWithoutCustomerInput, RewardRedemptionUncheckedCreateWithoutCustomerInput>
  }

  export type RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: RewardRedemptionWhereUniqueInput
    data: XOR<RewardRedemptionUpdateWithoutCustomerInput, RewardRedemptionUncheckedUpdateWithoutCustomerInput>
  }

  export type RewardRedemptionUpdateManyWithWhereWithoutCustomerInput = {
    where: RewardRedemptionScalarWhereInput
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type RewardRedemptionScalarWhereInput = {
    AND?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
    OR?: RewardRedemptionScalarWhereInput[]
    NOT?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
    id?: StringFilter<"RewardRedemption"> | string
    customerId?: StringFilter<"RewardRedemption"> | string
    giftName?: StringFilter<"RewardRedemption"> | string
    giftValue?: FloatFilter<"RewardRedemption"> | number
    redeemedBy?: StringFilter<"RewardRedemption"> | string
    stampsUsed?: IntFilter<"RewardRedemption"> | number
    redemptionDate?: StringFilter<"RewardRedemption"> | string
    redemptionTime?: StringFilter<"RewardRedemption"> | string
    status?: StringFilter<"RewardRedemption"> | string
    createdAt?: DateTimeFilter<"RewardRedemption"> | Date | string
  }

  export type CustomerCreateWithoutPurchasesInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stampTransactions?: StampTransactionCreateNestedManyWithoutCustomerInput
    rewardRedemptions?: RewardRedemptionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stampTransactions?: StampTransactionUncheckedCreateNestedManyWithoutCustomerInput
    rewardRedemptions?: RewardRedemptionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPurchasesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
  }

  export type CustomerUpsertWithoutPurchasesInput = {
    update: XOR<CustomerUpdateWithoutPurchasesInput, CustomerUncheckedUpdateWithoutPurchasesInput>
    create: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPurchasesInput, CustomerUncheckedUpdateWithoutPurchasesInput>
  }

  export type CustomerUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stampTransactions?: StampTransactionUpdateManyWithoutCustomerNestedInput
    rewardRedemptions?: RewardRedemptionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stampTransactions?: StampTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    rewardRedemptions?: RewardRedemptionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutStampTransactionsInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutCustomerInput
    rewardRedemptions?: RewardRedemptionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutStampTransactionsInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCustomerInput
    rewardRedemptions?: RewardRedemptionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutStampTransactionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutStampTransactionsInput, CustomerUncheckedCreateWithoutStampTransactionsInput>
  }

  export type CustomerUpsertWithoutStampTransactionsInput = {
    update: XOR<CustomerUpdateWithoutStampTransactionsInput, CustomerUncheckedUpdateWithoutStampTransactionsInput>
    create: XOR<CustomerCreateWithoutStampTransactionsInput, CustomerUncheckedCreateWithoutStampTransactionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutStampTransactionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutStampTransactionsInput, CustomerUncheckedUpdateWithoutStampTransactionsInput>
  }

  export type CustomerUpdateWithoutStampTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutCustomerNestedInput
    rewardRedemptions?: RewardRedemptionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutStampTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCustomerNestedInput
    rewardRedemptions?: RewardRedemptionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutRewardRedemptionsInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutCustomerInput
    stampTransactions?: StampTransactionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutRewardRedemptionsInput = {
    id?: string
    name: string
    mobile: string
    dob?: string | null
    anniversary?: string | null
    gender?: string | null
    address?: string | null
    stamps?: number
    totalVisits?: number
    totalSpend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCustomerInput
    stampTransactions?: StampTransactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutRewardRedemptionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRewardRedemptionsInput, CustomerUncheckedCreateWithoutRewardRedemptionsInput>
  }

  export type CustomerUpsertWithoutRewardRedemptionsInput = {
    update: XOR<CustomerUpdateWithoutRewardRedemptionsInput, CustomerUncheckedUpdateWithoutRewardRedemptionsInput>
    create: XOR<CustomerCreateWithoutRewardRedemptionsInput, CustomerUncheckedCreateWithoutRewardRedemptionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutRewardRedemptionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutRewardRedemptionsInput, CustomerUncheckedUpdateWithoutRewardRedemptionsInput>
  }

  export type CustomerUpdateWithoutRewardRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutCustomerNestedInput
    stampTransactions?: StampTransactionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutRewardRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    anniversary?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    stamps?: IntFieldUpdateOperationsInput | number
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCustomerNestedInput
    stampTransactions?: StampTransactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PurchaseCreateManyCustomerInput = {
    id?: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    stampEarned?: boolean
    stampReason?: string | null
    purchaseDate: string
    purchaseTime: string
    createdAt?: Date | string
  }

  export type StampTransactionCreateManyCustomerInput = {
    id?: string
    billNumber: string
    purchaseAmount: number
    cashierName: string
    transactionType: string
    transactionDate: string
    transactionTime: string
    createdAt?: Date | string
  }

  export type RewardRedemptionCreateManyCustomerInput = {
    id?: string
    giftName: string
    giftValue: number
    redeemedBy: string
    stampsUsed?: number
    redemptionDate: string
    redemptionTime: string
    status?: string
    createdAt?: Date | string
  }

  export type PurchaseUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    stampEarned?: BoolFieldUpdateOperationsInput | boolean
    stampReason?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: StringFieldUpdateOperationsInput | string
    purchaseTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    stampEarned?: BoolFieldUpdateOperationsInput | boolean
    stampReason?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: StringFieldUpdateOperationsInput | string
    purchaseTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    stampEarned?: BoolFieldUpdateOperationsInput | boolean
    stampReason?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: StringFieldUpdateOperationsInput | string
    purchaseTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StampTransactionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionDate?: StringFieldUpdateOperationsInput | string
    transactionTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StampTransactionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionDate?: StringFieldUpdateOperationsInput | string
    transactionTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StampTransactionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: FloatFieldUpdateOperationsInput | number
    cashierName?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionDate?: StringFieldUpdateOperationsInput | string
    transactionTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardRedemptionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    giftName?: StringFieldUpdateOperationsInput | string
    giftValue?: FloatFieldUpdateOperationsInput | number
    redeemedBy?: StringFieldUpdateOperationsInput | string
    stampsUsed?: IntFieldUpdateOperationsInput | number
    redemptionDate?: StringFieldUpdateOperationsInput | string
    redemptionTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardRedemptionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    giftName?: StringFieldUpdateOperationsInput | string
    giftValue?: FloatFieldUpdateOperationsInput | number
    redeemedBy?: StringFieldUpdateOperationsInput | string
    stampsUsed?: IntFieldUpdateOperationsInput | number
    redemptionDate?: StringFieldUpdateOperationsInput | string
    redemptionTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    giftName?: StringFieldUpdateOperationsInput | string
    giftValue?: FloatFieldUpdateOperationsInput | number
    redeemedBy?: StringFieldUpdateOperationsInput | string
    stampsUsed?: IntFieldUpdateOperationsInput | number
    redemptionDate?: StringFieldUpdateOperationsInput | string
    redemptionTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}