module.exports = {
  apps: [
    {
      name: 'telma-mg-cms',
      script: 'npm',
      args: 'start',
      env: {
        "PORT": 4337,
        "APP_KEYS": ['secret','secret1','secret2'],
        "API_TOKEN_SALT": 'FBFfzly8r5fNvmsWPxL/lg==',
        "ADMIN_JWT_SECRET": 'ecEwlcClDPixXDvbYZ70+A==',
        "JWT_SECRET": 'XtDLgPfy54xjHrUZTJE5zQ==',
        "SMTP_HOST": 'in-v3.mailjet.com',
        "SMTP_PORT": 587,
        "SMTP_USERNAME": '13d628c211a4a825729cc63f9fcd0ad6',
        "SMTP_PASSWORD": '3387af191ae09e4b5014f2a227b6cfce',
        "DATABASE_HOST": 'rn79600-002.dbaas.ovh.net',
        "DATABASE_PORT": 35867,
        "DATABASE_NAME": 'telma_mg_cms',
        "DATABASE_USERNAME": 'staging',
        "DATABASE_PASSWORD": 'CodeAndScale666',
        "PUBLIC_PATH" : "/home/centos/telma-cms-public"
      }
    },
  ],
};



