Rails.application.routes.draw do

<<<<<<< HEAD
  namespace :api do
    namespace :v1 do
      get 'motions/index'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'motions/create'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'motions/destroy'
    end
  end

=======
>>>>>>> zoey
  namespace :api do
    namespace :v1 do
      resources :motions, only: [:index]
      resources :subscriptions, only: [:index, :create]
      resources :users, only: [:show]
      resources :users, param: :user_id, only: [:show] do
        resources :templates
        resources :activities
        resources :liftsets, only: [:destroy]
      end
    end
  end

  get '/login', to: 'sessions#new', as: 'login'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/favicon.ico', to: 'application#null_response'
  get '/', to: 'sessions#new'

end
