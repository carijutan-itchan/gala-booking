Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"

  # Non-existent GET routing that occurs during normal browsing is handled on the front-end side
  get '*path', to: 'root#index', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
