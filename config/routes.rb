Crowdkillers::Application.routes.draw do
  resources :sessions, only: [:new, :create, :destroy]
  match '/:action', controller: :pages
  root to: 'pages#index'
end
