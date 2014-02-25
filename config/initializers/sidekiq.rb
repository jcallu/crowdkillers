require 'app_env'

Sidekiq.configure_client do |config|
  config.redis = { size: 1, namespace: AppEnv[:sidekiq_namespace] }
end

Sidekiq.configure_server do |config|
  config.redis = { size: 5, namespace: AppEnv[:sidekiq_namespace] }
end
