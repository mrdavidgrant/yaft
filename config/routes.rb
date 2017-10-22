Rails.application.routes.draw do


  namespace :api do
    namespace :v1 do
      resources :users, param: :user_id, only: [:show] do
        resources :activities
        resources :subscription, only: [:create]
        resources :liftsets, only: [:destroy]
      end
    end
  end

  post 'login', to: 'api/v1/users#authenticate', as: 'authenticate'


end
