import { generateSecret,sendSecretMail } from '../../../utils';
import { prisma } from '../../../../generated/prisma-client';

export default {
    Mutation: {
        requestSecret: async (_, args, { request }) => {
            console.log(request.user);
            const { email } = args;
            const loginSecret = generateSecret();
            try {
                throw new Error();
                await sendSecretMail("spqjeks@naver.com",loginSecret);
                await prisma.updateUser({ data: { loginSecret }, where: { email } });
                return true;
            } catch (error) {
                return false;
            }
        }
    }
}