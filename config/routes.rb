Chatter::Application.routes.draw do
  resources :messages
  root :to => 'static#start'
  match "messages/author" => "messages#author", :via => :post, :as => :author
end
