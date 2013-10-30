JournalApp::Application.routes.draw do
  get "static_pages/root"

  resources :posts, :only => [:create, :index, :update, :destroy]

  root :to => "static_pages#root"
end
