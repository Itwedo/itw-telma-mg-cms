module.exports = {
  apps: [
    {
      name: 'telma-mg-cms',
      script: 'npm',
      args: 'start',
      env: {
        "PORT": 2337,
        "APP_KEYS": ['secret','secret1','secret2'],
        "API_TOKEN_SALT": 'FBFfzly8r5fNvmsWPxL/lg==',
        "ADMIN_JWT_SECRET": 'ecEwlcClDPixXDvbYZ70+A==',
        "JWT_SECRET": 'XtDLgPfy54xjHrUZTJE5zQ==',
        "SMTP_HOST": 'webmail.telma.mg',
        "SMTP_PORT": 25,
        "SMTP_USERNAME": '',
        "SMTP_PASSWORD": '',
        "DATABASE_HOST": 'TDBQ302LV',
        "DATABASE_PORT": 2345,
        "DATABASE_NAME": 'telma_cms',
        "DATABASE_USERNAME": 'telmauser',
        "DATABASE_PASSWORD": 'uehdTkzopkdz678!',
        "DATABASE_SSL": false,
        "DATABASE_SCHEMA":"private",
        "PUBLIC_PATH" : "/opt/telmamg/cms/telma-public-images"
      }
    },
  ],
};



