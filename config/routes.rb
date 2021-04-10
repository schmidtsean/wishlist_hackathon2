Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

    namespace :api do
      resources :users do 
        resources :wishlists
      end
    
      resources :categories do
        resources :items
      end

        resources :wishlists do 
          resources :items
    end  
  end
end
