Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:new, :create, :authenticate, :update]
      resources :users, only: [] do
        resources :sessions, only: [:show, :update, :create, :index, :destroy]
      end
    end
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post 'login', to: 'api/v1/users#authenticate', as: 'authenticate'

  get '/body-parts/:id', to: 'api/v1/body_parts#index'


end
