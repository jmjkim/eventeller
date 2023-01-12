Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/usersignedin", to: "users#show"

  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"
  
  resources :events, shallow: true do
    resources :event_attendees, only: [:index, :create, :destroy]
    resources :feedbacks, only: [:index, :create]
  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end