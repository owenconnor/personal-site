set :stage, :production
#role :all, %w{deployer@owenconnor.net}
set :branch, "master"
set :server_name, "www.owenconnor.net owenconnor.net"
set :full_app_name, "#{fetch(:application)}_#{fetch(:stage)}"
server 'owenconnor.net', user: 'deployer', roles: %w{web app db}, primary: true
set :deploy_to, "/home/#{fetch(:deploy_user)}/apps/#{fetch(:full_app_name)}"
set :rails_env, :production
set :unicorn_worker_count, 5
set :enable_ssl, false