JournalApp::Application.routes.draw do
  devise_for :users

  get "static_pages/root"

  resources :blogs, :only => [:create, :index, :update, :destroy] do
    resources :posts, :only => [:index, :create, :destroy]
    resources :follows, :only => :create
  end

  resources :posts, :only => [:update] do
    resources :comments, :only => :index
    resources :tags, :only => [:create, :index]
  end

  resources :comments, :only => [:destroy, :create]
  resources :follows, :only => :destroy

  root :to => "static_pages#root"
end
