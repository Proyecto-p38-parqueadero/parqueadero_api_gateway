

const userResolver = {
    Query: {
        userDetailById: async(_, {userId}, { dataSources }) => {
            
                return await dataSources.usuarioAPI.getUser(userId)
            
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
            return await dataSources.usuarioAPI.createUser(authInput);
        },
        logIn: async(_, { credentials }, { dataSources }) => {
            return await dataSources.usuarioAPI.authRequest(credentials);
        },
        refreshToken: async(_, { refresh }, { dataSources }) => {
            return await dataSources.usuarioAPI.refreshToken(refresh);
        },
       
    }
};

module.exports = userResolver;