JournalApp::Application.routes.draw do
  devise_for :users

  get "static_pages/root"

  resources :blogs, :only => [:create, :index, :update, :destroy] do
  	resources :posts, :only => [:index, :create]
  end

  resources :posts, :only => [:update, :destroy] do
    resources :comments, :only => [:index, :create]
  end

  resources :comments, :only => [:destroy]

  root :to => "static_pages#root"
end
