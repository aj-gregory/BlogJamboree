class Post < ActiveRecord::Base
  attr_accessible :body, :title, :comments, :blog_id, :author_id, :photo_url
  validates :blog_id, :author_id, :presence => true
  validates :body, :title, { :if => photo_url.blank? }

  belongs_to :blog

  has_many :comments,
    :dependent => :destroy

  belongs_to :author,
    :class_name => "User"
end
