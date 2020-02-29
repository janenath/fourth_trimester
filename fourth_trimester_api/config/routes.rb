Rails.application.routes.draw do
  resources :tips
  resources :articles
  # resources :users, only: [:new, :create]
  post 'authenticate', to: 'authentication#authenticate'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
