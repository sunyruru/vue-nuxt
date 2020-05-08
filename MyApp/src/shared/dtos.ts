/* Options:
Date: 2020-05-08 16:45:38
Version: 5.81
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//GlobalNamespace: 
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface IHasSessionId
{
    sessionId: string;
}

export interface IHasBearerToken
{
    bearerToken: string;
}

export interface IPost
{
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public fieldName: string;

    // @DataMember(Order=3)
    public message: string;

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseError>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1, EmitDefaultValue=true)
    public errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=true)
    public message: string;

    // @DataMember(Order=3, EmitDefaultValue=true)
    public stackTrace: string;

    // @DataMember(Order=4, EmitDefaultValue=true)
    public errors: ResponseError[];

    // @DataMember(Order=5, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseStatus>) { (Object as any).assign(this, init); }
}

export class HelloResponse
{
    public result: string;

    public constructor(init?: Partial<HelloResponse>) { (Object as any).assign(this, init); }
}

export class GetLinksResponse
{
    public results: { [index: string]: string; };

    public constructor(init?: Partial<GetLinksResponse>) { (Object as any).assign(this, init); }
}

export class GetPostResponse
{
    public id: number;
    public title: string;
    public description: string;

    public constructor(init?: Partial<GetPostResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=11, EmitDefaultValue=true)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=1, EmitDefaultValue=true)
    public userId: string;

    // @DataMember(Order=2, EmitDefaultValue=true)
    public sessionId: string;

    // @DataMember(Order=3, EmitDefaultValue=true)
    public userName: string;

    // @DataMember(Order=4, EmitDefaultValue=true)
    public displayName: string;

    // @DataMember(Order=5, EmitDefaultValue=true)
    public referrerUrl: string;

    // @DataMember(Order=6, EmitDefaultValue=true)
    public bearerToken: string;

    // @DataMember(Order=7, EmitDefaultValue=true)
    public refreshToken: string;

    // @DataMember(Order=8, EmitDefaultValue=true)
    public profileUrl: string;

    // @DataMember(Order=9, EmitDefaultValue=true)
    public roles: string[];

    // @DataMember(Order=10, EmitDefaultValue=true)
    public permissions: string[];

    // @DataMember(Order=12, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AuthenticateResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AssignRolesResponse
{
    // @DataMember(Order=1, EmitDefaultValue=true)
    public allRoles: string[];

    // @DataMember(Order=2, EmitDefaultValue=true)
    public allPermissions: string[];

    // @DataMember(Order=3, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4, EmitDefaultValue=true)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<AssignRolesResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UnAssignRolesResponse
{
    // @DataMember(Order=1, EmitDefaultValue=true)
    public allRoles: string[];

    // @DataMember(Order=2, EmitDefaultValue=true)
    public allPermissions: string[];

    // @DataMember(Order=3, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4, EmitDefaultValue=true)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<UnAssignRolesResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class RegisterResponse
{
    // @DataMember(Order=1, EmitDefaultValue=true)
    public userId: string;

    // @DataMember(Order=2, EmitDefaultValue=true)
    public sessionId: string;

    // @DataMember(Order=3, EmitDefaultValue=true)
    public userName: string;

    // @DataMember(Order=4, EmitDefaultValue=true)
    public referrerUrl: string;

    // @DataMember(Order=5, EmitDefaultValue=true)
    public bearerToken: string;

    // @DataMember(Order=6, EmitDefaultValue=true)
    public refreshToken: string;

    // @DataMember(Order=7, EmitDefaultValue=true)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=8, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<RegisterResponse>) { (Object as any).assign(this, init); }
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    public name: string;

    public constructor(init?: Partial<Hello>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloResponse(); }
    public getTypeName() { return 'Hello'; }
}

// @Route("/links")
export class GetLinks implements IReturn<GetLinksResponse>
{

    public constructor(init?: Partial<GetLinks>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetLinksResponse(); }
    public getTypeName() { return 'GetLinks'; }
}

// @Route("/posts")
export class GetPost implements IReturn<GetPostResponse>
{
    public id: number;

    public constructor(init?: Partial<GetPost>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetPostResponse(); }
    public getTypeName() { return 'GetPost'; }
}

// @Route("/auth")
// @Route("/auth/{provider}")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost
{
    // @DataMember(Order=1, EmitDefaultValue=true)
    public provider: string;

    // @DataMember(Order=2, EmitDefaultValue=true)
    public state: string;

    // @DataMember(Order=3, EmitDefaultValue=true)
    public oauth_token: string;

    // @DataMember(Order=4, EmitDefaultValue=true)
    public oauth_verifier: string;

    // @DataMember(Order=5, EmitDefaultValue=true)
    public userName: string;

    // @DataMember(Order=6, EmitDefaultValue=true)
    public password: string;

    // @DataMember(Order=7, EmitDefaultValue=true)
    public rememberMe?: boolean;

    // @DataMember(Order=9, EmitDefaultValue=true)
    public errorView: string;

    // @DataMember(Order=10, EmitDefaultValue=true)
    public nonce: string;

    // @DataMember(Order=11, EmitDefaultValue=true)
    public uri: string;

    // @DataMember(Order=12, EmitDefaultValue=true)
    public response: string;

    // @DataMember(Order=13, EmitDefaultValue=true)
    public qop: string;

    // @DataMember(Order=14, EmitDefaultValue=true)
    public nc: string;

    // @DataMember(Order=15, EmitDefaultValue=true)
    public cnonce: string;

    // @DataMember(Order=16, EmitDefaultValue=true)
    public useTokenCookie?: boolean;

    // @DataMember(Order=17, EmitDefaultValue=true)
    public accessToken: string;

    // @DataMember(Order=18, EmitDefaultValue=true)
    public accessTokenSecret: string;

    // @DataMember(Order=19, EmitDefaultValue=true)
    public scope: string;

    // @DataMember(Order=20, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Authenticate>) { (Object as any).assign(this, init); }
    public createResponse() { return new AuthenticateResponse(); }
    public getTypeName() { return 'Authenticate'; }
}

// @Route("/assignroles")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>, IPost
{
    // @DataMember(Order=1, EmitDefaultValue=true)
    public userName: string;

    // @DataMember(Order=2, EmitDefaultValue=true)
    public permissions: string[];

    // @DataMember(Order=3, EmitDefaultValue=true)
    public roles: string[];

    // @DataMember(Order=4, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AssignRoles>) { (Object as any).assign(this, init); }
    public createResponse() { return new AssignRolesResponse(); }
    public getTypeName() { return 'AssignRoles'; }
}

// @Route("/unassignroles")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost
{
    // @DataMember(Order=1, EmitDefaultValue=true)
    public userName: string;

    // @DataMember(Order=2, EmitDefaultValue=true)
    public permissions: string[];

    // @DataMember(Order=3, EmitDefaultValue=true)
    public roles: string[];

    // @DataMember(Order=4, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<UnAssignRoles>) { (Object as any).assign(this, init); }
    public createResponse() { return new UnAssignRolesResponse(); }
    public getTypeName() { return 'UnAssignRoles'; }
}

// @Route("/register")
// @DataContract
export class Register implements IReturn<RegisterResponse>, IPost
{
    // @DataMember(Order=1, EmitDefaultValue=true)
    public userName: string;

    // @DataMember(Order=2, EmitDefaultValue=true)
    public firstName: string;

    // @DataMember(Order=3, EmitDefaultValue=true)
    public lastName: string;

    // @DataMember(Order=4, EmitDefaultValue=true)
    public displayName: string;

    // @DataMember(Order=5, EmitDefaultValue=true)
    public email: string;

    // @DataMember(Order=6, EmitDefaultValue=true)
    public password: string;

    // @DataMember(Order=7, EmitDefaultValue=true)
    public confirmPassword: string;

    // @DataMember(Order=8, EmitDefaultValue=true)
    public autoLogin?: boolean;

    // @DataMember(Order=10, EmitDefaultValue=true)
    public errorView: string;

    // @DataMember(Order=11, EmitDefaultValue=true)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Register>) { (Object as any).assign(this, init); }
    public createResponse() { return new RegisterResponse(); }
    public getTypeName() { return 'Register'; }
}

