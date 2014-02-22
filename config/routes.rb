Crowdkillers::Application.routes.draw do
  resources :sessions, only: [:create, :destroy, :new]
  match '/:action', controller: :pages
  root to: 'pages#index'
end
