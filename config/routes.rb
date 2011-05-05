ProbSet3::Application.routes.draw do

  root :to => "users#home"

  resources :users

  match '/seats/:id/update' => "seats#update2", :as => "upseat"
  match '/chats/load_chats' => "chats#load_chats"

  resources :seats

  resources :chats do
    resources :messages
  end

  resource :session

  match '/login' => "sessions#new", :as => "login"
  match '/logout' => "sessions#destroy", :as => "logout"


  match '/chats/:id/load_messages' => "chats#load_messages"

end
