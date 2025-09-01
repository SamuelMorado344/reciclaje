module.exports = {
    apps: [
      {
        name: 'appservice_apo',
        script: './app.js',
        instances: 1, 
        exec_mode: 'cluster',
        watch: true, 
        max_memory_restart: '2G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        },
        
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        error_file: '/tmp/log/appservice-error.log',
        out_file: '/tmp/log/appservice-out.log', 
        merge_logs: true,
        autorestart: true, 
        restart_delay: 10000, 
      }
    ]
  };