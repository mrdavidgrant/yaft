Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:new, :create, :authenticate]
    end
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post 'login', to: 'api/v1/users#authenticate', as: 'authenticate'


end
