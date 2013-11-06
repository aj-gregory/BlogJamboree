class Post < ActiveRecord::Base
  attr_accessible :body, :title, :comments, :blog_id
  validates :body, :title, :blog_id, :presence => true

  has_many :comments, :dependent => :destroy
	belongs_to :author, :class_name => "User"
	belongs_to :blog
end
