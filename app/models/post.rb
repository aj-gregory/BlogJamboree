class Post < ActiveRecord::Base
  attr_accessible :body, :title, :comments, :blog_id, :author_id
  validates :body, :title, :blog_id, :author_id, :presence => true

  belongs_to :blog

  has_many :comments,
	  :dependent => :destroy

	belongs_to :author,
	  :class_name => "User"
end
