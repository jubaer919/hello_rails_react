Rails.application.routes.draw do
  root 'greeting#index'

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end
end
