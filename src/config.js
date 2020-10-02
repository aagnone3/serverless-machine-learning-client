const dev = {
  STRIPE_KEY: "pk_live_51H1vt3Cs5i40eOUBbq1OnVd6gamICrKXIJixzhvsKtxTTUXZBpk8rHhoZxY8Id5y3Ta8bXSrvNga7MZ4bp3mS8Kh00QqrreUm6",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-dev-attachmentsbucket-zmimj85poxfm"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://i2x6me4gr7.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9cdaNTnKJ",
    APP_CLIENT_ID: "1omnod1vqiet9br6jh5iq62508",
    IDENTITY_POOL_ID: "us-east-1:c18b1ceb-8149-48e7-b487-df5fc84f2cbd"
  }
};

const prod = {
  STRIPE_KEY: "pk_live_51H1vt3Cs5i40eOUBbq1OnVd6gamICrKXIJixzhvsKtxTTUXZBpk8rHhoZxY8Id5y3Ta8bXSrvNga7MZ4bp3mS8Kh00QqrreUm6",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-attachmentsbucket-zmimj85poxfm"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://i2x6me4gr7.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9cdaNTnKJ",
    APP_CLIENT_ID: "1omnod1vqiet9br6jh5iq62508",
    IDENTITY_POOL_ID: "us-east-1:c18b1ceb-8149-48e7-b487-df5fc84f2cbd"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,  // unit: bytes
  ...config
};