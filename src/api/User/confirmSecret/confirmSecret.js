import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation: {
        confirmSecret: async (_, args)=> {
            const {email, secret } = args;
            const user = await prisma.user({ email });
            if(user.loginSecret === secret){
                return generateToken(user.id);
                
            }else{
                throw Error("email 또는 secretcode가 맞지 않습니다.");
            }
        }
    }
};