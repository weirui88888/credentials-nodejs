import * as $tea from '@alicloud/tea-typescript';
export default class Config extends $tea.Model {
    accessKeyId?: string;
    accessKeySecret?: string;
    securityToken?: string;
    bearerToken?: string;
    durationSeconds?: number;
    roleArn?: string;
    policy?: string;
    roleSessionExpiration?: number;
    roleSessionName?: string;
    publicKeyId?: string;
    privateKeyFile?: string;
    roleName?: string;
    credentialsURI?: string;
    oidcProviderArn: string;
    oidcTokenFilePath: string;
    type?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(config?: {
        [key: string]: any;
    });
}
