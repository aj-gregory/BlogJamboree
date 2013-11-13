class Post < ActiveRecord::Base
  attr_accessible :body, :title, :comments, :blog_id, :author_id, :photo_url
  validates :blog_id, :author_id, :presence => true

  before_validation :check_photo
  #validates :body, :title, :presence => true

  belongs_to :blog

  has_many :comments,
    :dependent => :destroy

  has_many :tags,
    :dependent => :destroy

  belongs_to :author,
    :class_name => "User"

  def check_photo
    if self.photo_url
      self.title = ""
      self.body = ""
    end
  end
end
