const argEnvIndex = process.argv.indexOf('--env')
let argEnv = (argEnvIndex !== -1 && process.argv[argEnvIndex + 1]) || ''

const RUN_ENV_MAP = {
  local: {
    instances: 2,
    max_memory_restart: '250M'
  },
  dev: {
    instances: 2,
    max_memory_restart: '250M'
  },
  prod: {
    instances: 3,
    max_memory_restart: '500M'
  }
}

if (!(argEnv in RUN_ENV_MAP)) {
  argEnv = 'prod'
}

module.exports = {
  apps: [
    {
      name: 'rhodo-rock',
      script: 'node_modules/next/dist/bin/next',
      args: `start -p ${process.env.NODE_PORT || 3002}`, // default to 3002 if NODE_PORT is not set
      instances: RUN_ENV_MAP[argEnv].instances,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: RUN_ENV_MAP[argEnv].max_memory_restart,
      env_local: {
        APP_ENV: 'local',
        NODE_ENV: 'test' // NODE_ENV: 'development' || NODE_ENV: 'test'
      },
      env_dev: {
        APP_ENV: 'dev',
        NODE_ENV: 'development' // NODE_ENV: 'development' || NODE_ENV: 'test'
      },
      env_prod: {
        APP_ENV: 'prod',
        NODE_ENV: 'production' // NODE_ENV: 'development' || NODE_ENV: 'test'
      }
    }
  ]
}