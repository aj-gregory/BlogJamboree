class Post < ActiveRecord::Base
  attr_accessible :body, :title, :comments
  validates :body, :title, :presence => true

  has_many :comments, :dependent => :destroy
	belongs_to :author, :class_name => "User"
end
