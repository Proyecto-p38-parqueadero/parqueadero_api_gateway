import usuarioAPI from "../dataSources/usuario_api";

const userResolver = {
    Query: {
        userDetailById: async(_, {userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.usuarioAPI.getUser(userId)
            else
                return null;
        }
    },
    Mutation: {
        signUpUser: async (_, {userInput}, { dataSources }) => {
            
            const authInput = {
                username : userInput.username,
                password : userInput.password,
                name     : userInput.name,
                email    : userInput.email 
            }
            
        },
        logIn: async(_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials);
        },
        refreshToken: async(_, { token }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(token);
        },
       
    }
};

module.exports = userResolver;