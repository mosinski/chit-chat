Chatter::Application.routes.draw do
  resources :messages
  root :to => 'static#start'
end
