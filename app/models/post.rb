class Post < ActiveRecord::Base
  attr_accessible :body, :title, :comments, :blog_id, :author_id, :photo_url

  before_validation :check_photo

  validates :blog_id, :author_id, :body, :title, :presence => true

  belongs_to :blog

  has_many :comments,
    :dependent => :destroy

  has_many :tags,
    :dependent => :destroy

  belongs_to :author,
    :class_name => "User"

  def check_photo
    if self.photo_url
      self.title = "photo"
      self.body = "photo"
    end
  end
end
